(function ($) {
  'use strict';

  /* 1. sticky And Scroll UP */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $('.header-sticky').removeClass('sticky-bar');
      $('#back-top').fadeOut(500);
    } else {
      $('.header-sticky').addClass('sticky-bar');
      $('#back-top').fadeIn(500);
    }
  });

  // Scroll Up
  $('#back-top a').on('click', function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // Single Img slder
  $('.top-job-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    centerPadding: '60px',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  });

  /* 6. Nice Selectorp  */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7. data-background */
  $('[data-background]').each(function () {
    $(this).css(
      'background-image',
      'url(' + $(this).attr('data-background') + ')'
    );
  });

  /* 8. WOW active */
  new WOW().init();
})(jQuery);
