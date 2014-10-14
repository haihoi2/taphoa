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
});