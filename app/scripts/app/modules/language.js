(function($){

  let languageHeader = $('.js_language-action');
  let languageList   = $('.js_language-list');


  languageHeader.click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    languageList.toggleClass('is-show');
  });


  if ( $('.js_language-list.is-show') ) {
    $(document).on('keyup', function(e) {
      if ( e.keyCode == 27 ) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });

    $(document).mouseup(function (e) {
      if ( languageList.has(e.target).length === 0 ) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });

  }

})(jQuery);
