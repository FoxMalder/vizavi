$(document).ready(function(){

  var owl    = $('.owl-carousel');
  var oLeft  = $('.js_slider-left');
  var oRight = $('.js_slider-right');

  owl.owlCarousel({
    loop:true,
    items:4
  });

  oLeft.click(function(){
    owl.trigger('prev.owl.carousel');
  });

  oRight.click(function(){
    owl.trigger('next.owl.carousel');
  });

});
