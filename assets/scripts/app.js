"use strict";

(function ($) {
  var menuItem = $('.js_header-link');
  var menuCloud = $('.js_header__cloud');
  var menuCloudItem = $('.header__cloud-item');
  var menuFinder = $('.js_header-finder');
  var menuFinderItem = $('.header__finder-item');
  var menuItemUser = $('.js_user-action');
  var menuCloudUser = $('.js_header-user');
  var menuItemSearch = $('.js_search-action');
  var menuCloudSearch = $('.js_header-search');
  menuItem.each(function () {
    $(this).on('click', function (event) {
      if ($('.js_user-action.is-active') || $('.js_search-action.is-active')) {
        menuItemUser.removeClass('is-active');
        menuItemSearch.removeClass('is-active');
      }

      var href = $(this).attr('data-href');
      $(this).closest('.header-menu__item').siblings().removeClass('is-active');
      $(this).closest('.header-menu__item').addClass('is-active');
      menuCloud.addClass('is-show');
      menuCloudItem.removeClass('is-show');
      $(href).siblings('.header__finder-item').removeClass('is-show');
      $(href).addClass('is-show');
      event.preventDefault();
    });
  });
  menuItemUser.on('click', function () {
    $(this).toggleClass('is-active');
    menuCloud.addClass('is-show');
    menuFinderItem.removeClass('is-show');
    menuCloudUser.siblings('.header__cloud-item').removeClass('is-show');
    menuCloudUser.addClass('is-show');
  });
  menuItemSearch.on('click', function () {
    $(this).toggleClass('is-active');
    menuCloud.addClass('is-show');
    menuFinderItem.removeClass('is-show');
    menuCloudSearch.siblings('.header__cloud-item').removeClass('is-show');
    menuCloudSearch.addClass('is-show');
  }); // закрытие по ESC и клику в любой области

  if ($('.js_header__cloud.is-show')) {
    $(document).on('keyup', function (event) {
      if (event.keyCode === 27) {
        menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
        menuCloud.removeClass('is-show');
        menuCloudUser.removeClass('is-show');
      }
    });
    /*
    $(document).mouseup(function (event) {
      if ( menuCloud.has(event.target).length === 0 ) {
        menuItem
          .closest('.header-menu__item')
          .siblings()
          .removeClass('is-active');
        menuCloud.removeClass('is-show');
        menuCloudUser.removeClass('is-show');
      }
    });
    */
  } // клик по гамбургеру


  (function () {
    $('.js_header-toggle').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active'); // $('.top-menu').toggleClass('open');
    });
  })();
})(jQuery);

(function ($) {
  var languageHeader = $('.js_language-action');
  var languageList = $('.js_language-list');
  languageHeader.click(function (event) {
    event.preventDefault();
    $(this).toggleClass('is-open');
    languageList.toggleClass('is-show');
  });

  if ($('.js_language-list.is-show')) {
    $(document).on('keyup', function (event) {
      if (event.keyCode === 27) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });
    $(document).mouseup(function (event) {
      if (languageList.has(event.target).length === 0) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });
  }
})(jQuery);

$(document).ready(function () {
  $('#trading-market-content').easytabs({
    animate: true,
    animationSpeed: 'fast',
    defaultTab: "span#is-select",
    tabs: '> div > div > span',
    tabActiveClass: 'is-active',
    panelActiveClass: "active-content-div",
    updateHash: false
  });
});
$(function () {
  $('#graph-container_1').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: null,
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shared: false
    },
    series: [{
      showInLegend: false,
      data: [5, 3, 8, 2, 4]
    }]
  });
  $('#graph-container_2').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: null,
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shared: false
    },
    series: [{
      showInLegend: false,
      data: [5, 3, 8, 2, 4]
    }]
  });
});
$(document).ready(function () {
  var owl = $('.js_traders-list');
  var owlLeft = owl.parents('.traders-slider__list').find('.js_slider-left');
  var owlRight = owl.parents('.traders-slider__list').find('.js_slider-right');
  owl.owlCarousel({
    loop: true,
    items: 4
  });
  owlLeft.click(function () {
    owl.trigger('prev.owl.carousel');
  });
  owlRight.click(function () {
    owl.trigger('next.owl.carousel');
  });
  var owl2 = $('.js_advantage-slider');
  var owlLeft2 = owl2.parents('.text-investor__cards').find('.js_slider-left');
  var owlRight2 = owl2.parents('.text-investor__cards').find('.js_slider-right');
  owl2.owlCarousel({
    loop: false,
    margin: 30,
    items: 4
  });
  owlLeft2.click(function () {
    owl2.trigger('prev.owl.carousel');
  });
  owlRight2.click(function () {
    owl2.trigger('next.owl.carousel');
  });
  var owl3 = $('.js_traders-list-main');
  var owlLeft3 = owl3.parents('.top-traders__list').find('.js_slider-left');
  var owlRight3 = owl3.parents('.top-traders__list').find('.js_slider-right');
  owl3.owlCarousel({
    loop: true,
    margin: 20,
    items: 3
  });
  owlLeft3.click(function () {
    owl3.trigger('prev.owl.carousel');
  });
  owlRight3.click(function () {
    owl3.trigger('next.owl.carousel');
  });
  var owl4 = $('.js_headline-slider');
  owl4.owlCarousel({
    loop: false,
    dots: true,
    items: 1,
    center: true
  });
});
//# sourceMappingURL=maps/app.js.map
