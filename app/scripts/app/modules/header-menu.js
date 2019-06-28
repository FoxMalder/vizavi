(function($){

  let menuItem        = $('.js_header-link');
  let menuCloud       = $('.js_header__cloud');

  let menuItemUser    = $('.js_user-action');
  let menuCloudUser   = $('.js_header-user');

  let menuItemSearch  = $('.js_search-action');
  let menuCloudSearch = $('.js_header-search');

  menuItem.each(function() {
    $(this).on('click',function(event) {
      var href = $(this).attr('data-href');

      $(this)
        .closest('.header-menu__item')
        .siblings()
        .removeClass('is-active');
      $(this)
        .closest('.header-menu__item')
        .addClass('is-active');

      menuCloud.addClass('is-show');
      $(href).addClass('is-show');
      $(href)
        .siblings()
        .removeClass('is-show');

      event.preventDefault();
    });
  });

  menuItemUser.on('click', function() {
    $(this).toggleClass('is-active');
    menuCloud.addClass('is-show');
    menuCloudUser
      .siblings('.header__cloud-item')
      .removeClass('is-show');
    menuCloudUser.addClass('is-show');
  });

  menuItemSearch.on('click', function() {
    $(this).toggleClass('is-active');
    menuCloud.addClass('is-show');
    menuCloudSearch
      .siblings('.header__cloud-item')
      .removeClass('is-show');
    menuCloudSearch.addClass('is-show');
  });

  // закрытие по ESC и клику в любой области
  if ( $('.js_header__cloud.is-show') ) {

    $(document).on('keyup', function(event) {
      if ( event.keyCode === 27 ) {
        menuItem
          .closest('.header-menu__item')
          .siblings()
          .removeClass('is-active');
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

  }

})(jQuery);
