$(document).ready(function() {

	$('.navicon').on('click', function(){
		$('.mainNavDropDown').slideToggle(500);
	});
	var chrome = "-webkit-linear-gradient(top,rgb(191,25,35), rgb(130,25,35))";
	var moz = "-moz-linear-gradient(top,rgb(191,25,35), rgb(130,25,35))"
	var ie = "linear-gradient(top,rgb(191,25,35), rgb(130,25,35))"
	var chromeClick = "-webkit-linear-gradient(top,rgb(130,25,35), rgb(191,25,35))";
	var mozClick = "-moz-linear-gradient(top,rgb(130,25,35), rgb(191,25,35))";
	var ieClick = "linear-gradient(top,rgb(130,25,35), rgb(191,25,35))";

	
	$(".search_button").mousedown(function(e) {
		console.log(e.currentTarget)
		$(e.currentTarget).css("background", chromeClick).css("background", mozClick).css("background", ieClick);
		console.log("Is Steve Avery innocent or guilty?");	

	});
	$(".search_button").mouseup(function(e) {
		console.log(e.currentTarget)
		$(e.currentTarget).css("background", chrome).css("background",moz).css("background", ie);	
	});
	$(".steps_footer_button").mousedown(function(e) {
		console.log("Hi Cori, Hi Infogenix");
		$(e.currentTarget).css("background", chromeClick).css("background", mozClick).css("background", ieClick);	
	});
	$(".steps_footer_button").mouseup(function(e) {
		console.log(e.currentTarget)
		$(e.currentTarget).css("background", chrome).css("background",moz).css("background", ie);	
	});
});
