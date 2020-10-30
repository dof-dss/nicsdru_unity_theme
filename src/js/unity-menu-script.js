/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context) {
      $('#main-menu').find('.menu-item').once('link').each(function () {
        $(this).children('a').attr('role', 'menuitem');

        if ($(this).hasClass('expanded')) {
          $(this).children('a').attr('aria-expanded', 'false');
          $(this).children('a').attr('aria-haspopup', 'true');
          $(this).children('a').append('<span class="fas fa-caret-down"></span>');
        }
      });

      var menubar = new Menubar(document.getElementById('menu-main'));
      menubar.init();
    }
  }
})(jQuery, Drupal);
