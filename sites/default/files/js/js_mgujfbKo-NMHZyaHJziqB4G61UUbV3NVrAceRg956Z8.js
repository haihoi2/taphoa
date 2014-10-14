/**
 * theme729 javascript core
 *
 * - Provides frequently used extensions to base javascript objects
 * - jQuery browser detection tweak
 * - Define functions used in events
 */

// Add String.trim() method
String.prototype.trim = function(){
	return this.replace(/\s+$/, '').replace(/^\s+/, '');
}

// Add Array.indexOf() method
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (obj, fromIndex) {
    if (fromIndex == null) {
      fromIndex = 0;
    } else if (fromIndex < 0) {
      fromIndex = Math.max(0, this.length + fromIndex);
    }
    for (var i = fromIndex, j = this.length; i < j; i++) {
      if (this[i] === obj){
        return i;
      }
    }
    return -1;
  };
}

// jQuery Browser Detect Tweak For IE7
jQuery.browser.version = jQuery.browser.msie && parseInt(jQuery.browser.version) == 6 && window["XMLHttpRequest"] ? "7.0" : jQuery.browser.version;

// Console.log wrapper to avoid errors when firebug is not present
// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if (this.console) {
    console.log(Array.prototype.slice.call(arguments));
  }
};

// init object
var theme729 = theme729 || {};

/**
 * Image handling functions
 */
theme729.image = { _cache : [] };

// preload images
theme729.image.preload = function() {
  for (var i = arguments.length; i--;) {
    var cacheImage = document.createElement('img');
    cacheImage.src = arguments[i];
    theme729.image._cache.push(cacheImage);
  }
}
;
jQuery(window).bind('load', function() {
	jQuery('.foreground').toggle('slow');
	function rr(){
		jQuery('#messages .section .messages:not(.error)').parents('#messages').slideUp(500).removeClass('sh');
		}
	jQuery('#messages').addClass('sd');
	jQuery('#messages.sd').slideDown(300)
	setTimeout(rr, 8500);
	jQuery('#messages .messages').prepend('<span class="close"></span>');
	jQuery('#messages .close').click(function(){
		jQuery(this).parent().slideUp();
	})
});

jQuery(function() {
	jQuery('.view-portfolio .views-field-field-portfolio-image a').hide();
});
jQuery(window).bind('load', function() {
	 var i = 1;
	 var imgs = jQuery('.view-portfolio .views-field-field-portfolio-image a').length;
	 var int = setInterval(function() {
		 //console.log(i); check to make sure interval properly stops
		 if(i >= imgs) clearInterval(int);
		 jQuery('.view-portfolio .views-field-field-portfolio-image a:hidden').eq(0).fadeIn(300);
		 i++;
	 }, 300);
});


jQuery(function(){
	jQuery('.view-portfolio .views-row .views-field-field-portfolio-image a').hover(function(){
		jQuery(this).find('img').stop().animate({opacity:'.4'})
	},

	function(){
		jQuery(this).find('img').stop().animate({opacity:'1'})
	})
	jQuery('.node-product-display .commerce-product-field-field-product-photo .colorbox').hover(function(){
		jQuery(this).prepend('<span></span>');
		
	},
		function(){
			jQuery(this).find('span').remove();
		}
	)
})
jQuery(function(){
	jQuery('#block-commerce-cart-cart h2').toggle(function(){
		jQuery(this).parent().find('.content').stop(true, true).slideDown();
	},
	function(){
		jQuery('#block-commerce-cart-cart .content').slideUp();
		}
	);
	if(jQuery('.admin #content > .section > .tabs').html()) {
	jQuery('#content > .section').hover(function(){
		jQuery(this).find('> .tabs').prepend('<span class="gear"></span>');
		jQuery(this).find('.gear').click(function(){
			jQuery(this).parent().find('ul.primary').show();
		})
	},
		function(){
			jQuery(this).find('.gear').remove();
			jQuery(this).find('ul.primary').hide();
		}
	)
}
if(jQuery(window).width() <  760) {
jQuery('.init-colorbox-processed.cboxElement').removeClass().click(function(){
	return false;
});
}
})
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
jQuery(document).ready(function() { 
	if(jQuery.cookie("css")) {
		jQuery("#body").attr("rel",jQuery.cookie("css"));
	}
	else{
		jQuery('#body').attr('rel', 'grid');
	}
	jQuery("#display li a").click(function() { 
		jQuery("#body").attr("rel",jQuery(this).attr('rel')).removeClass('checked');
		jQuery.cookie("css",jQuery(this).attr('rel'), {expires: 365, path: '/'});
		return false;
	});
	jQuery('.form-submit.wishlist').attr('title', 'Add to wishlsit');
});;
/**
 * jQuery Mobile Menu 
 * Turn unordered list menu into dropdown select menu
 * version 1.0(31-OCT-2011)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 *   http://github.com/mambows/mobilemenu
 */
(function($){
$.fn.mobileMenu = function(options) {
 
 var defaults = {
   defaultText: 'Navigate to...',
   className: 'select-menu',
   subMenuClass: 'sub-menu',
   subMenuDash: '&ndash;'
  },
  settings = $.extend( defaults, options ),
  el = $(this);
 
 this.each(function(){
  // ad class to submenu list
  el.find('ul').addClass(settings.subMenuClass);

  // Create base menu
  $('<select />',{
   'class' : settings.className
  }).insertAfter( el );

  // Create default option
  $('<option />', {
   "value"  : '#',
   "text"  : settings.defaultText
  }).appendTo( '.' + settings.className );

  // Create select option from menu
  el.find('a,.separator').each(function(){
   var $this  = $(this),
     optText = $this.text(),
     optSub = $this.parents( '.' + settings.subMenuClass ),
     len   = optSub.length,
     dash;
   
   // if menu has sub menu
   if( $this.parents('ul').hasClass( settings.subMenuClass ) ) {
    dash = Array( len+1 ).join( settings.subMenuDash );
    optText = dash + optText;
   }
   if($this.is('span')){
    // Now build menu and append it
   $('<optgroup />', {
    "label" : optText,
   }).appendTo( '.' + settings.className );
   }
   else{
    // Now build menu and append it
   $('<option />', {
    "value" : this.href,
    "html" : optText,
    "selected" : (this.href == window.location.href)
   }).appendTo( '.' + settings.className );
   }

  }); // End el.find('a').each

  // Change event on select element
  $('.' + settings.className).change(function(){
   var locations = $(this).val();
   if( locations !== '#' ) {
    window.location.href = $(this).val();
   }
  });
  $('.select-menu').show();

 });
 return this;
};
})(jQuery);
jQuery(function(){
   jQuery('#superfish-1').mobileMenu();
  })
;
