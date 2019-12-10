(function($,Drupal){Drupal.behaviors.nicsdruOriginsExtWin={attach:function attach(context){var $extLinkText=Drupal.t("external link opens in a new window / tab"),$intLinkText=Drupal.t("opens in a new window / tab");$("#container a[href*='http://'], #container a[href*='https://'], #container a[href^='//'], #bottom a[href*='http://'], #bottom a[href*='https://']",context).once("elink").each(function(){$(this).not("a.no-ext-icon, a.btn, a:has(img), .social-links a, .social-icons a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).append('<span class="visually-hidden">('+$extLinkText+')</span><svg aria-hidden="true" class="ico ico-elink"><title>'+$extLinkText+'</title><use xlink:href="#elink"></use></svg>').attr("title",$extLinkText).attr("target","_blank").attr("rel","noopener noreferrer")});$("#container a[data-ext-type^='External']",context).once("elink").each(function(){$(this).attr("href",$(this).attr("data-ext-url"))});$("#container a[target='_blank']",context).once("elink").each(function(){$(this).not("a.no-ext-icon, a:has(img), #main-content a[href*='http://'], #main-content a[href*='https://'], #main-content a[href^='//']").append('<span class="visually-hidden">('+$intLinkText+')</span><svg aria-hidden="true" class="ico ico-elink"><title>'+$intLinkText+'</title><use xlink:href="#elink"></use></svg>').attr("title",$intLinkText).attr("rel","noopener noreferrer")})}}})(jQuery,Drupal);