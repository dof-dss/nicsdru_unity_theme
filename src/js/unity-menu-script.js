/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context, settings) {
      $(once('has-submenu', '#main-menu')).find('.expanded .menu-link').each(function () {

        var $submenu = $(this).next('.menu-main_sub');

        if ($submenu.length == 1) {
          var $content = $(this).text();
          var $link = $(this).attr("href");

          $submenu.prepend('<li class="menu-item leaf title"><a href="'+$link+'" class="menu-link">'+$content+'</a></li>')
          $(this).attr('aria-haspopup', 'true');
          $(this).attr('aria-expanded', 'false');
          $(this).addClass('menu-toggle-btn');
          $(this).attr("tabindex", "0");
          $(this).removeAttr('href');
          $(this).append('<svg aria-hidden="true" class="ico ico-arrow-down"><use xlink:href="#arrow"></use></svg>');
        }
      });

      var clickHandler = function (e) {
        if ((e.type == 'keypress') && (e.which != 13)) {
          return;
        } else {
          e.preventDefault();

          $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
          });
          $(this).parent('.expanded').toggleClass('open');

          var $sibling = $(this).parent('.expanded').siblings();

          $sibling.removeClass('open');
          $sibling.find('.expanded').removeClass('open');
          $sibling.find('.menu-link').attr('aria-expanded', 'false');
        }
      };

      $(once('open-submenu', '#main-menu .menu-toggle-btn')).on('click keypress', clickHandler);
    }
  }

  var escHandler = function (event) {
    if ((event.type == 'keydown') && (event.which != 27)) {
      return;
    } else {
      event.preventDefault();

      var activeElement = document.activeElement;
      var subLinkParent = $(activeElement).parents('.menu-main_sub');

      if (subLinkParent.length) {
        $(subLinkParent).siblings('a').focus();
      }

      closeMenu();
    }
  }
  $(once('esc-close-submenu', document)).on('keydown', escHandler);

  $(once('close-submenu', document)).click(function (event) {
    var $trigger = $('#main-menu');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      closeMenu();
    }
  });

  var closeMenu = function () {
    console.log('Close Menu')
    $('#main-menu .menu-toggle-btn')
      .attr('aria-expanded', 'false')
      .parent('.expanded').removeClass('open')
  }
})(jQuery, Drupal);
