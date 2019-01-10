/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/data/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

$(document).ready(function(){
    /**
     * Fixed header
     */
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('dcr-fixed-header')
        }else if($(window).scrollTop() == 0) {
            $('header').removeClass('dcr-fixed-header');
        }
    });

    /*window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        console.log(scroll)
    });*/

    $('[data-toggle="tooltip"]').tooltip();
    $('.not-partners').owlCarousel({
        responsive : {
            // breakpoint from 0 up
            0 : {
                'items' : 1,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'nav' : true,
                'dots' : false
            },
            // breakpoint from 480 up
            480 : {
                'items' : 3,
                'nav' : true,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'margin' : 15,
                'dots' : false
            },
            // breakpoint from 768 up
            768 : {
                'items' : 4,
                'margin' : 20,
                'nav' : true,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'navText' : ['<', '>'],
                'dots' : false
            }
        }
    });
    $('.dcr-partners .partners').owlCarousel({
        responsive : {
            0 : {
                'items' : 1,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'nav' : true,
                'dots' : false
            },
            // breakpoint from 480 up
            480 : {
                'items' : 4,
                'nav' : true,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'margin' : 15,
                'dots' : false
            },
            768 : {
                'items' : 7,
                'margin' : 20,
                'nav' : true,
                'autoplay' : false,
                'autoplayHoverPause' : true,
                'navText' : ['<', '>'],
                'dots' : false
            }
        }
    });

    $('.dcr-flip-container').on('hover', function(){
        $(this).toggleClass('hover');
    })

    $('div.dcr-card-text').each(function(i, e) {
        $clamp(e, { clamp: 3, useNativeClamp: false });
    });

    $('.dcr-account-form').mCustomScrollbar();

})
