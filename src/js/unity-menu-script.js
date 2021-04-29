/* eslint-disable */
(function ($, Drupal) {
  Drupal.behaviors.nicsdruUnityMainMenu = {
    attach: function (context, settings) {
      $('#main-menu').find('.expanded .menu-link').once('has-submenu').each(function () {

        var $submenu = $(this).next('.menu-main_sub');
        var $sidemenu = $('#block-sidemenu').find('.menu');

        if ($submenu.length == 1) {
          var $content = $(this).text();
          var $link = $(this).attr("href");

          $submenu.prepend('<li class="menu-item leaf title"><a href="'+$link+'" class="menu-link">'+$content+'</a></li>');
          $sidemenu.prepend('<li class="menu-item leaf title"><a href="'+$link+'" class="menu-link">'+$content+'</a></li>');
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

        var $sibling = $(this).parent('.expanded').siblings();

        $sibling.removeClass('open');
        $sibling.find('.expanded').removeClass('open');
        $sibling.find('.menu-link').attr('aria-expanded', 'false');
      };

      $('#main-menu .menu-toggle-btn').once('open-submenu').on('click keypress', clickHandler);
    }
  }

  $(document).once('close-submenu').click(function (event) {
    var $trigger = $('#main-menu');
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('#main-menu .menu-toggle-btn')
        .attr('aria-expanded', 'false')
        .parent('.expanded').removeClass('open')
    }
  });
})(jQuery, Drupal);
