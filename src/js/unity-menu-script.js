/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context, settings) {
      $('#main-menu').find('.expanded .menu-link').once('has-submenu').each(function () {
        if ($(this).next('.menu-main_sub').length == 1) {
          $(this).attr('aria-haspopup', 'true');
          $(this).attr('aria-expanded', 'false');
          $(this).addClass('menu-toggle-btn');
          $(this).attr("tabindex", "0");
          $(this).removeAttr('href');
          $(this).append('<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg>');
        }
      });

      var clickHandler = function (e) {
        e.preventDefault();
        $(this).attr('aria-expanded', function (i, attr) {
          return attr == 'true' ? 'false' : 'true'
        });
        $(this).parent('.expanded').toggleClass('open');
        $(this).parent('.expanded').siblings().removeClass('open');
        $(this).parent('.expanded').siblings().children('.menu-link').attr('aria-expanded', 'false');
        $(this).parent('.expanded').siblings().children('ul').removeAttr('style');
      };

      $('#main-menu .menu-toggle-btn').once('open-submenu').on('click keypress', clickHandler);
    }
  }
})(jQuery, Drupal);
