$(function(){
    $('#toggleHeight').on('click', function()
    {
        var target = $(this).data('toggle');
        $(this).children('i').toggleClass('zmdi-chevron-up zmdi-chevron-down')
        $(target).toggleClass('--mobile-active')
    });
    /**
     * 
     */
    $('.nicescroll-box').niceScroll('.scroll', {cursorColor : 'red'})

    /**
     * 
     */
    $('div.description > p').each(function(i, e) 
        {
            $clamp(e, { clamp: 3, useNativeClamp: false });
        }
    );

    
    $("#googleMap").googleMap(
        {
            zoom: 10,
            coords: [48.895651, 2.290569],
            type: "ROADMAP"
        }
    );

    /**
     * 
     */
    $('.rater').on('click', function(e){
        $(this).parent().find('div.orphan').show();
        return false;
    })

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.orphan > ul > li').on('mouseover', function () 
    {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.orphan > ul > li').on('click', function () 
    {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('checked');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('checked');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('.orphan > ul > li.checked').last().data('value'), 10);
        
        if (ratingValue > 1) {
            console.log("Thanks! You rated this " + ratingValue + " stars.");
        }
        else {
            console.log("We will improve ourselves. You rated this " + ratingValue + " stars.");
        }

        $('.orphan').hide('slow');
    });

    
})

$(window).on('load', function() {
    if($('#container').length){
        $('#container').masonry({
            "itemSelector": ".item",
            "columnWidth": ".grid-sizer",
        });
    }
    
});

$(window).scroll(function() 
{    
    /*var scroll = $(window).scrollTop();

    if (scroll >= 157) 
    {
        $("#header").removeClass("unfixed").addClass('fixed');
    }else {
        $("#header").removeClass('fixed').addClass('unfixed');
    }*/
});

/**
 * 
 */
window.addEventListener('load', function(event)
{
    if(document.querySelector("#menuOpenBtn"))
    {
        var menuOpenBtn = document.getElementById('menuOpenBtn');
        menuOpenBtn.addEventListener('click', function()
        {
            var target = document.getElementById('sideBarMenu');
            var targetElementClass = target.className;
            
            if(targetElementClass.indexOf('close') !== -1)
                target.className = target.className.replace('close','open');
        }
        );
    }  

    if(document.querySelector("#menuCloseBtn"))
    {
        var menuCloseBtn = document.getElementById('menuCloseBtn');
        menuCloseBtn.addEventListener('click', function()
        {
            var target = document.getElementById('sideBarMenu');
            var targetElementClass = target.className;
            
            if(targetElementClass.indexOf('open') !== -1)
                target.className = target.className.replace('open','close');
        }
        );
    }  
});


/**
 * JSSOR SLIDER
 */
var options = { $AutoPlay: 1};
var jssor_1_slider_init = new $JssorSlider$("jssor_1", options);