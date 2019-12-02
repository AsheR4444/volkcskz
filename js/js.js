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
    dots: true
  });
});
