$(function() { //$(document).ready() shortcut

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

        $("#options-clock_results").html(hours + ":" + minutes + ":"  + seconds);
        }, 1000);


	
	//Show clock
	$("#options-clock_icons").click(function() {
		$("#options-clock_results").toggleClass("show");
	});

	//Show countdown
    $("#options-countdown_icons").click(function() {
        $("#timer-countdown").toggleClass("show");
        $("#up-countdown").toggleClass("show");
        $("#down-countdown").toggleClass("show");
        $("#options-countdown_controller").toggleClass("show");
    });


	//Contrast button
	$("#options-contrast_icons").click(function() {
		$("#container").toggleClass("darkTheme");
		$("#text-tasks").toggleClass("darkTheme");
	});
	
	//Play music
    $("#options-music_icons").click(function() {
		$("#options-music_results").toggleClass("show");
    });

	
});


