/****************************
* PARALLAX MOUSE
****************************/
var scene = document.getElementById('p-home');
var parallax = new Parallax(scene);

var scene = document.getElementById('p-somos');
var parallax = new Parallax(scene);

var scene = document.getElementById('p-portifolio');
var parallax = new Parallax(scene);

var scene = document.getElementById('p-colecao');
var parallax = new Parallax(scene);


$(document).ready(function(){
    /****************************
    * SCROLL MENU
    ****************************/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    /****************************
    * FORMULÁRIO
    ****************************/
    $("#txttelefone").mask("(00) 0000-00009");
    /****************************
    * MODAL GALERY IMG
    ****************************/
    $('#portfolio-amauri').click(function(){
        $.iLightBox([{
            URL:        "img/portfolio/amauri/amauri1.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri1.jpg",}},{

            URL:        "img/portfolio/amauri/amauri2.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri2.jpg",}},{

            URL:        "img/portfolio/amauri/amauri3.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri3.jpg",}},{

            URL:        "img/portfolio/amauri/amauri4.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri4.jpg",}},{

            URL:        "img/portfolio/amauri/amauri5.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri5.jpg",}},{

            URL:        "img/portfolio/amauri/amauri6.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/amauri/thumb/amauri6.jpg"}}
            ],{
                skin: 'dark',
                path: 'horizontal',
                maxScale: 1.3,
                overlay: {
                opacity: .8
            },
                styles: {
                nextOffsetX: 75,
                nextOpacity: .55,
                prevOffsetX: 75,
                prevOpacity: .55
            },
                thumbnails: {
                normalOpacity: .6,
                activeOpacity: 1
            }});
            return false;
    }),
        $('#portfolio-heir').click(function(){
        $.iLightBox([{
            URL:        "img/portfolio/heir/heir1.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir1.jpg",}},{

            URL:        "img/portfolio/heir/heir2.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir2.jpg",}},{

            URL:        "img/portfolio/heir/heir3.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir3.jpg",}},{

            URL:        "img/portfolio/heir/heir4.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir4.jpg",}},{

            URL:        "img/portfolio/heir/heir5.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir5.jpg",}},{

            URL:        "img/portfolio/heir/heir6.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir6.jpg",}},{

            URL:        "img/portfolio/heir/heir7.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir7.jpg",}},{

            URL:        "img/portfolio/heir/heir8.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir8.jpg",}},{

            URL:        "img/portfolio/heir/heir9.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/heir/thumb/heir9.jpg"}}
            ],{
                skin: 'light',
                path: 'horizontal',
                maxScale: 1.3,
                overlay: {
                opacity: .4
            },
                styles: {
                nextOffsetX: 75,
                nextOpacity: .55,
                prevOffsetX: 75,
                prevOpacity: .55
            },
                thumbnails: {
                normalOpacity: .6,
                activeOpacity: 1
            }});
            return false;
    });
        $('#portfolio-jolitex').click(function(){
        $.iLightBox([{
            URL:        "img/portfolio/jolitex/jolitex1.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex1.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex2.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex2.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex3.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex3.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex4.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex4.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex5.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex5.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex6.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex6.jpg",}},{

            URL:        "img/portfolio/jolitex/jolitex7.jpg",type: "image",options: {
            thumbnail:  "img/portfolio/jolitex/thumb/jolitex7.jpg"}}
            ],{
                skin: 'light',
                path: 'horizontal',
                maxScale: 1.3,
                overlay: {
                opacity: .4
            },
                styles: {
                nextOffsetX: 75,
                nextOpacity: .55,
                prevOffsetX: 75,
                prevOpacity: .55
            },
                thumbnails: {
                normalOpacity: .6,
                activeOpacity: 1
            }});
            return false;
    });

    /****************************
    * DIAGONAL STYLE
    ****************************/
    var angle = Math.atan2($(window).width(), $(window).height());
        console.log(angle);

        $('.blocktop,.blockbottom').css('transform', 'skew(+' + angle + 'rad)').add('.portifolio-logo').show();

        $(".portifolio-logo").click(function() {
            setTimeout(function () {
                $(".blocktop").animate({ left: '-120%', opacity: '0' },800);
                $(".blockbottom").animate({ right: '-120%', opacity: '0'  }, 800);
                $(".loadline").animate({ left: '1000', top: '0' }, 1000);
                $('.portifolio-logo').fadeOut('700');
            }, 100);
         });

        $('.blocktop2,.blockbottom2').css('transform', 'skew(-' + angle + 'rad)').add('.colecao-logo').show();

        $(".colecao-logo").click(function() {
            setTimeout(function () {
                $(".blocktop2").animate({ left: '-120%', opacity: '0' },800);
                $(".blockbottom2").animate({ right: '-120%', opacity: '0'  }, 800);
                $(".loadline").animate({ left: '1000', top: '0' }, 1000);
                $('.colecao-logo').fadeOut('700');
            }, 100);
         });
});