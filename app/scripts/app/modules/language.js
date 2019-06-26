(function($){

  let languageHeader = $('.js_language-action');
  let languageList   = $('.js_language-list');


  languageHeader.click(function(event) {
    event.preventDefault();
    $(this).toggleClass('is-open');
    languageList.toggleClass('is-show');
  });


  if ( $('.js_language-list.is-show') ) {
    $(document).on('keyup', function(event) {
      if ( event.keyCode === 27 ) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });

    $(document).mouseup(function (event) {
      if ( languageList.has(event.target).length === 0 ) {
        languageHeader.removeClass('is-open');
        languageList.removeClass('is-show');
      }
    });

  }

})(jQuery);
