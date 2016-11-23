$(function() {
    $('.featured').owlCarousel({
        loop: true,
        //nav:true,
        pagination: false,
        items: 2,
        stagePadding: 50,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: {
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1300: {
                items: 3
            },
            1800: {
                items: 4
            }
        }
    });

    // favorite star
    $('span.favorite').bind('click', function() {
        $(this).toggleClass('active');
        return false;
    });

    // Feed tabs
    $('.options .option').bind('click', function() {
        $('.options .option').removeClass('active');
        $(this).addClass('active');
    });

    // dashboard filters
    $('.filters .filter').bind('click', function() {
        $('.filters .filter').removeClass('active');
        $(this).addClass('active');
    });

    // resize function
    $(window).bind('resize', function() {
        setTimeout(function() {
            homeBanner();
        }, 500);

        var width = $(window).width();

        if (width > 620) {
            $('.topnav .links').addClass('force');
        } else {
            $('.topnav .links').removeClass('force');
        }
    });

    // mobile menu
    $('.topnav .mmenu').bind('click', function() {
        $('.topnav .mmenu').toggleClass('active');
        $('.topnav .links').fadeToggle(500);
    });

    // Home page banner height
    function homeBanner() {
        var height = $(window).height() - 250;
        $('body.home .featured').css('height', height);
    }

    homeBanner();

    // popup
    $('.popup').magnificPopup({
      type: 'ajax'
    });
});
