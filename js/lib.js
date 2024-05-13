// When the user scrolls down 140px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    $("#navbar").css ("top",0);
  } else {
    $("#navbar").style.top = "-150px";
  }
}
*/
//Carrusel
var GLOBAL = {};
GLOBAL.current = 0;
GLOBAL.imagenes = new Array();

$(document).ready(function() {
    var numImages = 11;
    if (numImages <= 1) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }

    $('.left-arrow').on('click',function() {
        if (GLOBAL.current > 0) {
            GLOBAL.current = GLOBAL.current - 1;
        } else {
            GLOBAL.current = numImages - 3;
        }

        $(".carrusel").animate({"left": -($('#investigador_'+GLOBAL.current).position().left)}, 500);

        return false;
    });

    $('.right-arrow').on('click', function() {
        if (numImages > GLOBAL.current + 3) {
            GLOBAL.current = GLOBAL.current + 1;
        } else {
            GLOBAL.current = 0;
        }

        $(".carrusel").animate({"left": -($('#investigador_'+GLOBAL.current).position().left)}, 500);

        return false;
    });


//Ventana modal jQuery

    $('.modal').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();

        var $modal = $($(this).attr('data-modal-id'));

        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //Set the popup window to center
        $modal.css('top',  winH/2-$modal.height()/2);
        $modal.css('left', winW/2-$modal.width()/2);
        $('body').css('position', "static");
        $('body').css('height', "100%");
        $('body').css('overflow', "hidden");

        //transition effect
        $modal.fadeIn(1000);

    });

    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('.window').hide();
        $('body').css('position', "inherit");
        $('body').css('height', "auto");
        $('body').css('overflow', "visible");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27) {
            e.preventDefault();
            $('.window').hide();
            $('body').css('position', "inherit");
            $('body').css('height', "auto");
            $('body').css('overflow', "visible");
        }
    });

    //menu vertical 1
    $(".btn").click(function(){
        var id = $(this).attr('data-menu-id');

        $('.event').hide(500,"swing");
        $(id).css('position', "static");
        $(id).slideDown(500,"swing");
        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    //menu vertical 2
    $(".btn2").click(function(){
        var id = $(this).attr('data-menu-id');

        $('.exp').hide(500,"swing");
        $(id).css('position', "static");
        $(id).slideDown(500,"swing");
        $('.btn2').removeClass('active');
        $(this).addClass('active');
    });

//Mostrar
    $('.recurso').click(function(){
        var id = $(this).attr('data-rec-id');

        $('.cont').hide(500,"swing");
        $(id).slideDown(500,"swing");
        $('.recurso').removeClass('active');
        $(this).addClass('active');
    });


//Botón de Menu de navegación
    if (screen.width<700){
        $('.btn-menu').click(function(){
            $('.btn-menu').hide();
            $('header').addClass('visible');
            $('header').css('left', "0");
        });
        $('.menu-ppal').click(function cerrar(){
            $('.btn-menu').show();
            $('header').removeClass('visible');
        });
        $('.btn-close').click(function cerrar(){
            $('.btn-menu').show();
            $('header').removeClass('visible');
        });
    };

//Menu de navegación
    $('[data-offset="true"]').each(function(){
        var $this = $(this);
        var menu_offset = $this.offset().top + $this.height();

        $( window ).bind("scroll", function() {
            var offset = $(this).scrollTop();

            if (offset >= menu_offset) {
                $this.addClass('scroll_top');
            }
            else if (offset < menu_offset) {
                $this.removeClass('scroll_top');
            }
        });

    });
 });