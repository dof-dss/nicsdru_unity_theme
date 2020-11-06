/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context, settings) {
      $('#main-menu').find('.expanded').once('has-submenu').each(function () {
        $(this).children('button').attr('aria-expanded', 'false');
        $(this).children('button').attr('aria-haspopup', 'true');
        $(this).children('button').append('<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg>');

        var $menuLink = $(this).children('button');
        var clickHandler = function (e) {
          e.preventDefault();
          $menuLink.attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
          });
          $menuLink.parent('.expanded').toggleClass('open');
          $(this).parent('.expanded').siblings().removeClass('open');
          $(this).parent('.expanded').siblings().children('.menu-link').attr('aria-expanded', 'false');
          $(this).parent('.expanded').siblings().children('ul').removeAttr('style');
        };

        $menuLink.on('click', clickHandler);
      });
    }
  }
})(jQuery, Drupal);
