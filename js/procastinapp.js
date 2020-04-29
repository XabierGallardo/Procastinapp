$(function() { //$(document).ready() shorcut

	//Start clock
	setInterval(function(){

		let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();

        //Add double digits
		if (hours < 10) {
			hours = "0" + hours;

		}

		if (minutes < 10) {
			minutes = "0" + minutes;

		}

		 if (seconds < 10) {
			seconds = "0" + seconds;
		}

        $("#options-results_clock").html(hours + ":" + minutes + ":"  + seconds);
        }, 1000);


	
	//Show clock
	$("#options-icons_clock").click(function() {
		$("#options-results_clock").toggleClass("show");
	});

	//Show countdown
    $("#options-countdown_icons").click(function() {
        $("#timer-countdown").toggleClass("show");
        $("#up-countdown").toggleClass("show");
        $("#down-countdown").toggleClass("show");
        $("#options-countdown_controller").toggleClass("show");
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


