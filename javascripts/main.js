$(function() {
	$('a[href*=#]:not([href=#])').click(scrollToAnchor);

	if(window.location.hash) $('a[href*=#' + window.location.hash + ']:not([href=#])').click();
});

function scrollToAnchor() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        	$('html,body').animate({
	          	scrollTop: target.offset().top
	        }, 1000);
        	//return false;
        }
	}
}