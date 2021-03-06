jQuery(document).ready(function(){
	
	///////////////////////////////
	// Keydown events
	///////////////////////////////
	$(document).keydown(function(event) {
		if(event.keyCode==37) { //Arrow Left
			$("body").data("backstretch").prev();
		};
		if(event.keyCode==39) { //Arrow Right
			$("body").data("backstretch").next();
		};
		if(event.keyCode==27) { //Esc
				$(".togglebutton,#header,#siteinfo,#pagewrapper,#prevbutton,#nextbutton,.content").toggleClass("hidden");
		};
	});
	
	// Disable keydown events
	$("input, textarea").keydown(function(event){
		event.stopPropagation();
	});

	///////////////////////////////
	// Swipe
	///////////////////////////////
	$(function() {			
		$("body").swipe( {
			swipeLeft:function(event, distance, duration, fingerCount) {
				$("body").data("backstretch").next();
			},
			swipeRight:function(event, distance, duration, fingerCount) {
				$("body").data("backstretch").prev();
			},
			threshold: 150
		});
		$(".togglebutton").swipe( {
			click:function() {
				$(".togglebutton,#header,#siteinfo,#pagewrapper,#prevbutton,#nextbutton,.content").toggleClass("hidden");
			}
		});
	});
	
	///////////////////////////////
	// Extra classes
	///////////////////////////////
	
	// Body class on document ready
	$( "body" ).addClass( "ready" );
	
	// Disable swipe
	$( ".content, #header" ).addClass( "noSwipe" );

});