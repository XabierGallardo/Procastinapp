//CLOCK////////////////////////////////////////////////////////////
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
	
	document.getElementById("options-clock_results").innerHTML =clockHours + ":" + clockMinutes + ":"  + clockSeconds;

}, 1000);


function showClock() {
	let clockIcon = document.getElementById("options-clock_results");
	clockIcon.classList.toggle("show");
};





//CHRONOMETER/////////////////////////////////////////////////////
	let startTime = 0;
	let start = 0;
	let end = 0;
	let diff = 0;
	let timerID = 0;

	function chrono() {
		end = new Date();
		diff = end - start;
		diff = new Date(diff);
		//let msec = diff.getMilliseconds();
		let sec = diff.getSeconds();
		let min = diff.getMinutes();
		let hr = diff.getHours()-1;

		//Add double digits
		if (hr < 10) {
			hr = "0" + hr;
		}
		if (min < 10) {
			min = "0" + min;
		}
		if (sec < 10) {
			sec = "0" + sec;
		}
		/*if(msec < 10) {
			msec = "00" +msec;
		}
		else if(msec < 100) {
			msec = "0" +msec;
		}*/

		document.getElementById("chrono-results").innerHTML = hr + ":" + min + ":" + sec;
		timerID = setTimeout("chrono()", 1000);
	}

	function chronoStart() {
		let playchrono = document.getElementById("play-chrono");
		let restartchrono = document.getElementById("restart-chrono");

		playchrono.className = "fas fa-pause fa-2x";
		playchrono.onclick = chronoStop;
		restartchrono.onclick = chronoReset;

		start = new Date();
		chrono();
	}

	function chronoContinue() {
		let playchrono = document.getElementById("play-chrono");
		let restartchrono = document.getElementById("restart-chrono");

		playchrono.className = "fas fa-pause fa-2x";
		playchrono.onclick = chronoStop;
		restartchrono.onclick = chronoReset;

		start = new Date()-diff;
		start = new Date(start);
		chrono();
	}

	function chronoReset() {
		document.getElementById("chrono-results").innerHTML = "00:00:00";
		start = new Date();
	}

	function chronoStopReset() {
		let playchrono = document.getElementById("play-chrono");
		playchrono.onclick = chronoStart;

		document.getElementById("chrono-results").innerHTML = "00:00:00";
	}

	function chronoStop() {
		let playchrono = document.getElementById("play-chrono");
		let restartchrono = document.getElementById("restart-chrono");
		playchrono.className = "fas fa-play fa-2x";
		playchrono.onclick = chronoContinue;
		restartchrono.onclick = chronoStopReset;

		clearTimeout(timerID);
	}



	

//MUSIC////////////////////////////////////////////////////////////
function showMusic() {
	let musicIcons = document.getElementById("options-music_results");
	musicIcons.classList.toggle("show");
}

let music_on = false;

//Heavy Rain
let heavyrain = new Howl({
	src: ['media/heavyrain.opus']
});

let btn_heavyrain = document.getElementById("heavyrain");

btn_heavyrain.onclick = function (){
	music_on = !music_on; //Toggle music functionality
	if (music_on === true) {
		heavyrain.play();
		console.log("Playing heavy rain");
	} else {
		heavyrain.stop();
		console.log("Stopped heavy rain");
	}
}

//Glacier Lagoon
let glacierlagoon = new Howl({
	src: ['media/glacierlagoon.opus']
});

let btn_glacierlagoon = document.getElementById("glacierlagoon");

btn_glacierlagoon.onclick = function() {
	music_on = !music_on;
	if (music_on === true) {
		glacierlagoon.play();
		console.log("Playing glacier lagoon");
	} else {
		glacierlagoon.stop();
	}
}

//Park Rain
let parkrain = new Howl({
	src: ['media/parkrain.opus']
});

let btn_parkrain = document.getElementById("parkrain");

btn_parkrain.onclick = function() {
	music_on = !music_on;
	if(music_on === true) {
		parkrain.play();
		console.log("Playing park rain");
	} else {
		parkrain.stop();
	}
}

//Waterfall
let waterfall = new Howl({
	src: ['media/waterfall.opus']
});

let btn_waterfall = document.getElementById("waterfall");
btn_waterfall.onclick = function() {
	music_on = !music_on;
	if(music_on === true) {
		waterfall.play();
		console.log("Playing waterfall");
	} else {
		waterfall.stop();
	}
}





//CONTRAST/////////////////////////////////////////////////////////
function changeTheme() {
	let general = document.getElementById("container");
	let text = document.getElementById("text-tasks");

	general.classList.toggle("darkTheme");
	text.classList.toggle("darkTheme");
}