//$(document).ready() shorcut
$(function() {
	
	//Show clock
	$("#options-icons_clock").click(function() {
		$("#options-results_clock").toggleClass("show");
	});

	//Show countdown
        $("#options-icons_countdown").click(function() {
                $("#options-results_countdown").toggleClass("show");
        });


	//Contrast button
	$("#options-icons_contrast").click(function() {
		$("#container").toggleClass("darkTheme");
		$("#tasks-text").toggleClass("darkTheme");
	});
	
	//Play music
        $("#options-icons_music").click(function() {
		$("#options-results_music").toggleClass("show");
        });

	
});


