$(document).ready(function(){
  $('.slider-box').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    accessebillity: true
  });

  $('.container').mixItUp();

  $('.popup').magnificPopup();
});