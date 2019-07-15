$(document).ready(function(){

  let owl = $('.services_list');

  owl.owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    autoplayTimeout: 1000,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: '#Trackers',
    dotsContainer: '#services_menu'
  });

  $('.services_nav-left').click(function(){
    owl.trigger('prev.owl.carousel');
  });

  $('.services_nav-right').click(function(){
    owl.trigger('next.owl.carousel');
  });

});
