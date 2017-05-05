// JavaScript Document
var aBatch = 0;
var bBatch = 0;
var cBatch = 0; 
var dBatch = 0;
var winCount    = 0;
var lossCount   = 0;
var randomVar   = 0;
var playCounter = 0; 

//$(document).ready(function() {
	function openWin() {
    window.open("info.html");
}

function startGame() {
	
	// set/reset the inital value of playCounter to 0 and get randomVar
	playCounter = 0;
	$('#scaleWt').text(playCounter);
	
	randomVar = Math.floor(Math.random()*51)+9;
	$('#orderWt').html(randomVar);
	console.log(playCounter + " " + randomVar);

	// set the random value for each crystal
		aBatch = Math.floor(Math.random() *9)+4;
		bBatch = Math.floor(Math.random() *9)+4;
		cBatch = Math.floor(Math.random() *9)+4;
		dBatch = Math.floor(Math.random() *9)+4;

	console.log(aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
	
	// add value of slected crystal to the Playcounter and check game status 
	$('#c1').on('click',function () {
		playCounter += aBatch;
		$('#scaleWt').text(playCounter);
		checkStatus();
		});
	
	$('#c2').on('click', function () {
		playCounter += bBatch;
		$('#scaleWt').text(playCounter);
		checkStatus();
		});

	$('#c3').on('click', function () {
		playCounter += cBatch;
		$('#scaleWt').text(playCounter);
		checkStatus();
		});
	
	$('#c4').on('click', function () {
		playCounter += dBatch;
		$('#scaleWt').text(playCounter);
		checkStatus();
		});	
	 
	
		
}
// compare playCounter to randomVar and execute apprpriate action
function checkStatus (){
	
	if(playCounter == randomVar) {
		alert("you win");
		winCount ++;
		$('#wins').text(winCount);
		startGame();
	}
	else if (playCounter > randomVar) {
		alert("You Lose");
		lossCount ++;
		$('#losses').text(lossCount);
		startGame();
	}
	else {
		console.log(playCounter + " " + randomVar);
		return;
	}
}
