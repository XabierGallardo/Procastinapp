//$(document).ready() shorcut
$(function() {
	
	//Default theme
	$("#container").addClass("lightTheme");
	$("#tasks-text").addClass("lightTheme");



	//Show clock
	$("#options-clock").click(function() {
		console.log("clock!");
	});

	//Show countdown
        $("#options-countdown").click(function() {
                console.log("countdown!");
        });


	//Contrast button
	$("#options-contrast").click(function() {
		$("#container").toggleClass("darkTheme");
		$("#tasks-text").toggleClass("darkTheme");
	});
	
	//Play music
        $("#options-music").click(function() {
                console.log("music!");
        });

	
});


