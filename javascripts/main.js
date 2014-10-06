$(function() {

	var config = {
		base_url: 'http://teneo.angelvision.tv/',
		admin_url: 'http://teneo.angelvision.tv/admin/'
	};
	$(function() {
		$('.fancybox').fancybox();


		var mobileHeaderOffset = 46,
			mobileWidth = 801;

		$('.menu-toggle').click(function() {
			// Close
			if($('body').hasClass('noscroll')) {
				$('header').toggleClass('active');
				$('header').animate({
					bottom: window.innerHeight - mobileHeaderOffset
				}, 500, function() {
					$('header').css('bottom','')
					$('body').toggleClass('noscroll');
				});
			}
			// Open
			else  {
				$('body').toggleClass('noscroll');
				$('header').css('bottom', window.innerHeight - mobileHeaderOffset)
				$('header').animate({
					bottom: 0
				}, 500, function() {
					$('header').toggleClass('active');
				});
			}

			$('header .menu-wrap').animate({
				height: 'toggle'
			}, 500);
		});

		// Header Offset
		//$('#masterContainer').css('padding-top', $('header').height());

		// Scroll To Anchor
		/*$('.logo a').click(function() {

			// MOBILE: Close main menu
			if($(window).width() < 801) {
				if($('header .menu-wrap').css('display') == 'block') {
					animateHeight($('header .menu-wrap'));
				}
			}

			$('html,body').animate({
			    scrollTop: 0
			}, 1000);
			
			return false;
		});*/
		function scrollToAnchor() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? $('#'+ this.hash.slice(1) + '.section') : null;
				//target = target.length ? target : $('#'+ this.hash.slice(1) + '.section');
				if (target != null && target.length) {
					// MOBILE: Close main menu, then scroll to target
					if($(window).width() < mobileWidth) {
						if($('header .menu-wrap').css('display') == 'block') {
							$('header').toggleClass('active');
							$('header').animate({
								bottom: window.innerHeight - mobileHeaderOffset
							}, 500, function() {
								$('header').css('bottom','')
								$('body').toggleClass('noscroll');
								$('html,body').animate({
								    scrollTop: target.offset().top - mobileHeaderOffset
								},1000);
							});
							$('header .menu-wrap').animate({
								height: 'toggle'
							}, 500);
						}
						else {
							$('html,body').animate({
							    scrollTop: target.offset().top - $('header').height()
							},1000);
						}
					}
					// Scroll to target
					else {
						$('html,body').animate({
						    scrollTop: target.offset().top - $('header').height()
						},1000);
					}

					if(history.pushState) {
					    history.pushState(null, null, this.hash);
					}
					else {
					    location.hash = this.hash;
					}

					return false;
				}
		    }
	  	}
	  	$('a[href*=#]:not([href=#])').click(scrollToAnchor);

	  	// Brute force way to check if Google Feed API is complete.
	  	function checkElementCount() {
	  		// If 5 or more news feed items are printed, start the scroll.
	  	  if($('.gfc-result').length > 4) {
	  	     
	  	  } else {
	  	    setTimeout(checkElementCount, 50);
	  	  }
	  	}
	  	if(window.location.hash) checkElementCount();
	});
	
});

$(function() {
	$('a[href*=#]:not([href=#])').click(scrollToAnchor);
});

function scrollToAnchor() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html,body').animate({
	          	scrollTop: target.offset().top
	        }, 1000);
        	return false;
        }
	}
}

$(function() {
	$('a[href*=#]:not([href=#])').click(scrollToAnchor);
});

function scrollToAnchor() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html,body').animate({
	          	scrollTop: target.offset().top
	        }, 500);
        	
        	if(history.pushState) {
        	    history.pushState(null, null, this.hash);
        	}
        	else {
        	    location.hash = this.hash;
        	}
        	
        	return false;
        }
	}
}