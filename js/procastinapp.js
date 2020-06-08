//$(function() { //$(document).ready() shortcut

	//INITIAL CONFIG////////////////////////////////////////////////////////////////////////////
	var startTime = 0
	var start = 0
	var end = 0
	var diff = 0
	var timerID = 0
	function chrono(){
		end = new Date()
		diff = end - start
		diff = new Date(diff)
		var msec = diff.getMilliseconds()
		var sec = diff.getSeconds()
		var min = diff.getMinutes()
		var hr = diff.getHours()-1
		if (min < 10){
			min = "0" + min
		}
		if (sec < 10){
			sec = "0" + sec
		}
		if(msec < 10){
			msec = "00" +msec
		}
		else if(msec < 100){
			msec = "0" +msec
		}
		document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
		timerID = setTimeout("chrono()", 10)
	}
	function chronoStart(){
		document.chronoForm.startstop.value = "stop!"
		document.chronoForm.startstop.onclick = chronoStop
		document.chronoForm.reset.onclick = chronoReset
		start = new Date()
		chrono()
	}
	function chronoContinue(){
		document.chronoForm.startstop.value = "stop!"
		document.chronoForm.startstop.onclick = chronoStop
		document.chronoForm.reset.onclick = chronoReset
		start = new Date()-diff
		start = new Date(start)
		chrono()
	}
	function chronoReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		start = new Date()
	}
	function chronoStopReset(){
		document.getElementById("chronotime").innerHTML = "0:00:00:000"
		document.chronoForm.startstop.onclick = chronoStart
	}
	function chronoStop(){
		document.chronoForm.startstop.value = "start!"
		document.chronoForm.startstop.onclick = chronoContinue
		document.chronoForm.reset.onclick = chronoStopReset
		clearTimeout(timerID)
	}
	/*
	//Set crono
	let startTime = 0;
	let start = 0;
	let end = 0;
	let diff = 0;
	let timerID = 0;



	let cronoSeconds;
	let cronoMinutes;
	let cronoHours;

	//Set clock
/*	setInterval(function() {
	
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
	    	$("#options-clock_results").html(clockHours + " : " + clockMinutes + " : "  + clockSeconds);}, 1000);




	//CRONO//////////////////////////////////////////////////////////////////////////////////////////
	$(".fa-play").click(startCrono);
	//$(".fa-pause").click(stopCrono);
	$(".fa-history").click(restartCrono);

	//Crono functions////////////////
	function crono () {

                end = new Date();
                dif = end - start;
                dif = new Date(dif);

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
	
		$("#crono-hours").html(cronoHours);
		$("#crono-minutes").html(cronoMinutes);
		$("#crono-seconds").html(cronoSeconds);

		timerID = setTimeout(crono, 10);
	}


	function startCrono() {
		$("#play-crono").toggleClass("fa-pause fa-play");
		$(".fa-pause").click(stopCrono);
		$(".fa-history").click(restartCrono);
		start = new Date();
		crono();
	}

	function continueCrono() {
		$("#play-crono").toggleClass("fa-pause fa-play");
		$(".fa-pause").click(stopCrono);
		$(".fa-history").click(restartCrono);
		start = new Date() - dif;
		start = new Date(start);
		crono();
	}

	function restartCrono () { 
		$("#crono-hours").html("0");
                $("#crono-minutes").html("0");
                $("#crono-seconds").html("0");
		start = new Date();
	}
	
	function stopRestartCrono () { 
		$("#crono-hours").html("0");
		$("#crono-minutes").html("0");
		$("#crono-seconds").html("0");
		$("#play-crono").click(startCrono);
	}


	function stopCrono() {
		$("#play-crono").toggleClass("fa-pause fa-play");
		$(".fa-play").click(continueCrono);
		$(".fa-history").click(stopRestartCrono);
		clearTimeout(timerID);
	}




	//Show clock///////////////////////////////////////////////
	$("#options-clock_icons").click(function() {
		$("#options-clock_results").toggleClass("show");
	});

	//Play music///////////////////////////////////////////////
    	$("#options-music_icons").click(function() {
		$("#options-music_results").toggleClass("show");
    	});

	//Contrast button//////////////////////////////////////////
	$("#options-contrast_icons").click(function() {
		$("#container").toggleClass("darkTheme");
		$("#text-tasks").toggleClass("darkTheme");
	});
	

*/


//});
