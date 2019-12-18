/* eslint-disable */
(function ($) {
  $(document).ready(function ($) {
    $(window).resize(function() {
      if( ($(window).width() > 625)) {
        $('#main-menu li').mouseenter(function() {
          $(this).children('ul').css('display', 'none').stop(true, true).slideToggle(250).css('display', 'block').children('ul').css('display', 'none');
        });
        $('#main-menu li').mouseleave(function() {
          $(this).children('ul').stop(true, true).fadeOut(250).css('display', 'block');
        })
        $('#main-menu ul').css('display', 'block');
      } else {
        $('#main-menu ul').css('display', 'none');
        $('#main-menu li').each(function() {
          if($(this).children('ul').length)
            $(this).append('<span class="drop-down-toggle"><span class="drop-down-arrow"></span></span>');
        });
        $('.drop-down-toggle').click(function() {
          $(this).parent().children('ul').slideToggle(250);
        });
      }
    });

    $('.burger-toggle').click(function () {
      var target = $(this).attr('data-target');
      $(target).slideToggle(100, 'swing', function () {
        ($(this).hasClass('collapse')) ? $(this).removeClass('collapse') : $(this).addClass('collapse');
        $(this).removeAttr('style');
      });
    });

    $('#main-menu').find('.expanded').each(function (index, el) {
      $(this).append('<button class="ul-toggle">+</button>');
    });

    $('.ul-toggle').on('click', function (event) {
      event.preventDefault();
      if ($(this).text() == '+') {
        $(this).text('-');
      } else {
        $(this).text('+');
      }
      $(this).siblings('.menu').toggleClass('collapse');
    });
  });
})(jQuery);

