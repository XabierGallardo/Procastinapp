$(function() { //$(document).ready() shortcut

	//INITIAL CONFIG////////////////////////////////////////////////////////////////////////////


	//Set crono
	let startTime = 0;
	let start = 0;
	let end = 0;
	let dif = 0;
	let timerID = 0;

	let cronoMSecs;
	let cronoSeconds;
	let cronoMinutes;
	let cronoHours;
	let counter = 0;
	let crono_working = false;


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

		//Print clock on the screen
	    	$("#options-clock_results").html(clockHours + " : " + clockMinutes + " : "  + clockSeconds);
        
	}, 1000);





	//CRONO//////////////////////////////////////////////////////////////////////////////////////////
	
        function crono () {

                end = new Date();
                dif = end - start;
                dif = new Date(dif);

		cronoMSecs = dif.getMilliseconds();
		cronoSeconds = dif.getSeconds();
		cronoMinutes = dif.getMinutes();
                cronoHours = dif.getHours() - 1;

		 //Print values and add double digits
		if (cronoSeconds < 10) {
			cronoSeconds = "0" + cronoSeconds;
		}

		if (cronoMinutes < 10) {
			cronoMinutes = "0" + cronoMinutes;
		}

		if (cronoHours < 10) {
			cronoHours = "0" + cronoHours;
		}

		// Optional Milliseconds
		if (cronoMSecs < 10){
			cronoMSecs = "00" + cronoMSecs;
		}

		if (cronoMSecs < 100) {
			cronoMSecs = "0" + cronoMSecs;
		}

		$("#crono-hours").html(cronoHours);
		$("#crono-minutes").html(cronoMinutes);
		$("#crono-seconds").html(cronoSeconds);
		$("#crono-milliseconds").html(cronoMSecs);

		timerID = setTimeout(crono, 10);
	}


	$("#play-crono").click(function() {
		$("#play-crono").toggleClass("fa-pause fa-play");
		crono_working = !crono_working;
		console.log(crono_working);
		counter++;
		console.log(counter)

		if (counter < 2) {
			startCrono();
		}
	});


	//Crono functions////////////////
	function startCrono() {
		if (crono_working === true) {
			$(".fa-pause").click(stopCrono);
		
			$("#restart-crono").click(restartCrono);

			start = new Date();

			crono();
		}
	}

	function continueCrono() {
		//if (crono_working === false) {

		$(".fa-pause").click(stopCrono);
		
		$("#restart-crono").click(restartCrono);

		start = new Date() - dif;

		start = new Date(start);

		crono();
		//}
	}

	function restartCrono () { 
	/*	$("#crono-hours").html(cronoHours);
                $("#crono-minutes").html(cronoMinutes);
                $("#crono-seconds").html(cronoSeconds);
                $("#crono-milliseconds").html(cronoMSecs);
	*/
		start = new Date();
		counter = 0;
	}
	
	function stopRestartCrono () { $(".fa-play").click(startCrono);}


	function stopCrono() {
		$(".fa-play").click(continueCrono);
		$("#restart-crono").click(stopRestartCrono);

		clearTimeout(timerID);
	}
	




	//Show clock///////////////////////////////////////////////
	$("#options-clock_icons").click(function() {
		$("#options-clock_results").toggleClass("show");
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
