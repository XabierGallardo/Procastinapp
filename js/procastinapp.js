$(function() { //$(document).ready() shortcut

	//INITIAL CONFIG////////////////////////////////////////////////////////////////////////////

	//Set and display crono 
	let cronoHours = 0;
	let cronoMinutes = 0;
	let cronoSeconds = 0;
	let crono_start = false;

	$("#crono-hours").html("0" + cronoHours);
	$("#crono-minutes").html("0" + cronoMinutes);
	$("#crono-seconds").html("0" + cronoSeconds);	


	//Set clock
	setInterval(function() {
	
		let clock = new Date();
	    	let clockHours = clock.getHours();
	        let clockMinutes = clock.getMinutes();
	        let clockSeconds = clock.getSeconds();

    		//Add double digits
		if (clockHours < 10) {
			clockHours = "0" + clockHours;
		}

		if (clockMinutes < 10) {
			clockMinutes = "0" + clockMinutes;
		}

		if (clockSeconds < 10) {
			clockSeconds = "0" + clockSeconds;
		}

		//Print clock on the screem
	    	$("#options-clock_results").html(clockHours + ":" + clockMinutes + ":"  + clockSeconds);
        
	}, 1000);


	//CRONO//////////////////////////////////////////////////////////////////////////////////////////
	
	/*To do: 
	 * Reset button, fix values to 0
	 * Don't start when the page is loaded
	 * */

        function chrono () {

                let end = new Date();
                let dif = end - start;

                dif = new Date(dif);
		let cronoMSecs = dif.getMilliseconds();
		let cronoSeconds = dif.getSeconds();
		let cronoMinutes = dif.getMinutes();
                let cronoHours = dif.getHours() - 1;

		 //Print values and add double digits
		if (cronoSeconds < 10) {
			cronoSeconds = "0" + cronoSeconds;
		}

		if(cronoMinutes < 10) {
			cronoMinutes = "0" + cronoMinutes;
		}

		if (cronoHours < 10) {
			cronoHours = "0" + cronoHours;
		}



	}


	$("#play-crono").click(function() {

		//Reverse value and change icon
		crono_start = !crono_start;
		$("#play-crono").toggleClass("fa-pause fa-play");

		if (crono_start === true) { //While working
			console.log(crono_start);

		} else {
			console.log(crono_start);
		}
	});


	//Restart crono
	//$("#restart-crono").click(restartCrono);


	//Crono functions////////////////
	/*function startCrono() {

		setInterval(function () {

			if (cronoSeconds > 59) { //Add a minute each 60 seconds
				cronoSeconds = 0;
				cronoMinutes++;
			}

			if (cronoMinutes > 59) { //Add an hour each 60 minutes
				cronoMinutes = 0;
				cronoHours++;
			}

			if(cronoHours > 24) { //Add a max of 24 hours to reset values
				cronoSeconds = 0;
				cronoMinutes = 0;
				cronoHours = 0;
			}


			//Print values and add double digits
			if (cronoSeconds < 10) {
				$("#crono-seconds").html("0" + cronoSeconds);
			} else {
				$("#crono-seconds").html(cronoSeconds);
			}

			if(cronoMinutes < 10) {
				$("#crono-minutes").html("0" + cronoMinutes);	
			} else {
				$("#crono-minutes").html(cronoMinutes);
			}	

			if (cronoHours < 10) {
				$("#crono-hours").html("0" + cronoHours);
			} else {
				$("#crono-hours").html(cronoHours);
			}
			cronoSeconds++;		
		}, 1000);
	}


	function restartCrono () {
		crono_start = false;
		$("#crono-hours").html("0" + cronoHours);
	        $("#crono-minutes").html("0" + cronoMinutes);
	        $("#crono-seconds").html("0" + cronoSeconds);

	}*/


	
	//Show clock///////////////////////////////////////////////
	$("#options-clock_icons").click(function() {
		$("#options-clock_results").toggleClass("show");
	});

	//Show countdown///////////////////////////////////////////
    	$("#options-countdown_icons").click(function() {
        	$("#timer-countdown").toggleClass("show");
        	$("#up-countdown").toggleClass("show");
        	$("#down-countdown").toggleClass("show");
        	$("#options-countdown_controller").toggleClass("show");
    	});


	//Contrast button//////////////////////////////////////////
	$("#options-contrast_icons").click(function() {
		$("#container").toggleClass("darkTheme");
		$("#text-tasks").toggleClass("darkTheme");
	});
	
	//Play music///////////////////////////////////////////////
    	$("#options-music_icons").click(function() {
		$("#options-music_results").toggleClass("show");
    	});

	
});
