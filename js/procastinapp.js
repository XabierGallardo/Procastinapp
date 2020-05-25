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
	 * Icon toggle (Play to pause, pause to play) DONE
	 * Reset button, fix values to 0
	 * Don't start when the page is loaded
	 * */


	//Start crono
	//let crono = setInterval(startCrono,1000);

	$("#play-crono").click(function() {
		crono_start = !crono_start; //Revert value of boolean
		$("#play-crono").toggleClass("fa-pause fa-play");


		if (crono_start === true) { //While working
			console.log(crono_start);
			//startCrono();

		} else {
				
			console.log(crono_start);
			//pauseCrono();
		}
	});


	//Pause crono
	$("#pause-crono").click(stopCrono);


	//Restart crono
	$("#restart-crono").click(startCrono);


	//Crono functions////////////////
	function startCrono() {
		console.log("crono working");

			

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
	}

	function stopCrono () {
		console.log("pause button");
		clearInterval(crono);
	}


	function restartCrono () {
		console.log("crono restarted");
		cronoHours = 0;
		cronoMinutes = 0;
		cronoSeconds = 0;
	}




	
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
