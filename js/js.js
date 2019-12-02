$(document).ready(function() {
  $('.header-slider').slick({
    arrows: true,
    prevArrow: $('.slider__arrow_left'),
    nextArrow: $('.slider__arrow_right')
  });
  $('.models-slider').slick({
    arrows: true,
    slidesToShow: 4,
    dots: true
  });
  $('.offer-slider').slick({
    arrows: true,
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
      {
        breakpoint: 300,
        settings: 'unslick' // destroys slick
      }
    ]
  });
});
