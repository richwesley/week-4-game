// JavaScript Document
//initialize all global variables
var aBatch 		= 0;
var bBatch 		= 0;
var cBatch 		= 0; 
var dBatch 		= 0;
var winCount    = 0;
var lossCount   = 0;
var randomVar   = 0;
var playCounter = 0; 

//$(document).ready(function() {
function showInst() {
    $('#info').text("Walt and Jesse have commissioned you to sell off some excess inventory.  Jesse has come up with a new way to unload the goods.  Rather than packaging it in predetermined quantities (ie a quater bag or eight ball), Jessie has decided to 'take orders' and  let the customer buy whatever quantity they want.  When you click the 'Get Order' button you will need to package it by choosing the correct amount of each crystal variety so that it weighs exactly the order quanity.  But, be carefull if you go over you will anger Walt and lose the order.  Good luck.");
}

function newGame () {
	winCount   = 0;
	lossCount  = 0;
	startGame();
}

function startGame() {
	
	// set/reset the inital value of playCounter to 0 and get randomVar
	playCounter = 0;
	$('#scaleWt').text(playCounter);
	
	randomVar = Math.floor(Math.random()*51)+9;
	$('#orderWt').html(randomVar);
	console.log("init Rndvar " + playCounter + " " + randomVar);

	// set the random value for each crystal
		aBatch = Math.floor(Math.random() *9)+4;
		bBatch = Math.floor(Math.random() *9)+4;
		cBatch = Math.floor(Math.random() *9)+4;
		dBatch = Math.floor(Math.random() *9)+4;

	console.log("init crystals " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
	
	// add value of slected crystal to the Playcounter and check game status 
	$('#c1').on('click',function () {
		playCounter += aBatch;
		$('#scaleWt').text(playCounter);
		console.log("c1 " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		checkStatus();
		});
	
	$('#c2').on('click', function () {
		playCounter += bBatch;
		$('#scaleWt').text(playCounter);
		console.log("c2 " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		checkStatus();
		});

	$('#c3').on('click', function () {
		playCounter += cBatch;
		$('#scaleWt').text(playCounter);
		console.log("c3 " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		checkStatus();
		});
	
	$('#c4').on('click', function () {
		playCounter += dBatch;
		$('#scaleWt').text(playCounter);
		console.log("c4 " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		checkStatus();
		});	
}
// compare playCounter to randomVar and execute apprpriate action
function checkStatus (){
	
	if(playCounter == randomVar) {
		alert("you win");
		winCount ++;
		$('#wins').text(winCount);
		console.log("if " + aBatch + " " +bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		startGame();
	}
	else if (playCounter > randomVar) {
		alert("You Lose");
		lossCount ++;
		$('#losses').text(lossCount);
		console.log("else if" + aBatch + " " + bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);
		startGame();
	}
	else {
		console.log(" else " + aBatch + " " + bBatch + " " + cBatch + " " + dBatch);
		console.log(playCounter + " " + randomVar);	
	}
}
