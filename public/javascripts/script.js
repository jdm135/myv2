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
        $('.wrapper.home .featured').css('height', height);
    }

    homeBanner();
    styleSelects();

    // style selects
    function styleSelects(){
      $('select').chosen();
    }

    // popup
    $('.popup').magnificPopup({
      type: 'ajax',
      callbacks: {
        open: function(){
          setTimeout(function(){
            paymentOptions();
            styleSelects();
          }, 350);
        }
      }
    });

    // select payment functionality
    function paymentOptions(){
      $('.select-option a').bind('click', function(){
        var type = $(this).attr('data-val');

        $('.select-option').hide();
        $('.options .option').removeClass('active');
        $('.options .option.' + type).addClass('active');
      });

      $('.options a.back').bind('click', function(){
        $('.select-option').show();
        $('.options .option').removeClass('active');
      });
    }

    // tabs
    $('.slider .options .option').bind('click', function(){
      var val = $(this).attr('data-attr');
      $('.slider .slides').removeClass('active');

      $('.slider .slides.' + val).addClass('active');
    });

    // logged in user
    $('.topnav .user').bind('click', function(){
      $(this).toggleClass('active');
      $('.topnav .user .dropdown').slideToggle(350);
    });

    // other tabs
    $('.wrapper.landing .tabs .tab').bind('click', function() {
        // toggle tabs
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');

        // showing content
        var val = $(this).attr('data-attr');
        $('.tab-content .tcontent').removeClass('active');
        $('.tab-content .tcontent.' + val).addClass('active');
    });

    // steps
    $('.wrapper.steps .steps-container .step a.btn, .wrapper.steps .steps-container .step a.back').bind('click', function() {
        var val = $(this).attr('data-val');
        $('.wrapper.steps .steps-container .step').removeClass('active');
        $('.wrapper.steps .steps-container .step.step-' + val).addClass('active');
    });

    // signup email form
    $('.wrapper.signup .email-form').bind('click', function() {
        $('.wrapper.signup .step .hide').slideToggle(350);
    });

    // toggle btns on campaign
    $('.toggle-btns .option').bind('click', function() {
        $('.toggle-btns .option').removeClass('active');
        $(this).addClass('active');

        var val = $(this).attr('data-val');
        if (val == 'launch') {
            $('.toggle-btns').addClass('launch');
        } else {
            $('.toggle-btns').removeClass('launch');
        }
    });

    //tab settings logic
    $('.tab-settings a').bind('click', function() {
        var type = $(this).attr('data-type');

        // show active state for tabs
        $('.tab-settings a').removeClass('active');
        $(this).addClass('active');

        // show content side
        $('.main-content .desc').removeClass('active');
        $('.main-content .desc.' + type).addClass('active');
    });

    // slider options
    $('.slider .options .option').bind('click', function(){
      var val = $(this).attr('data-attr');
      $('.slider .slides').removeClass('active');

      $('.slider .slides.' + val).addClass('active');
    });
});
