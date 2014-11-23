
var computerChoice = Math.floor(Math.random() * 100);
console.log(computerChoice);
var userChoice;

var userGuess = function () {
	userChoice = prompt("Guess A whole number between 0 and 100");
}

userGuess();
alert("Started HOTTTT")

var totalGuess = 1;

while(userChoice != computerChoice) {
	var previousChoice = userChoice;
	
	userChoice = prompt("Guess a whole number between 0 and 100");
	if((userChoice >  computerChoice) && (userChoice < previousChoice)) {
		alert("Getting Hotter");
		console.log("Getting Hotter");
		console.log(previousChoice);
		
	}
	else if((userChoice > computerChoice) && (userChoice > previousChoice)) {
		alert("Getting Colder");
		console.log("Getting Colder");
		console.log(previousChoice);
	
	}
	else if((userChoice < computerChoice) && (userChoice < previousChoice)) {
		alert("Getting Colder");
		console.log("Getting Colder");
		console.log(previousChoice);
		
	}
	else if((userChoice < computerChoice) && (userChoice > previousChoice)) {
		alert("Getting Hotter");
		console.log("Getting Hotter");
		console.log(previousChoice);
		
	}
	else if(userChoice == previousChoice) {
		alert("Neither Hotter nor Colder");
		console.log("Neither Hotter nor Colder");
		console.log(previousChoice);
	
	}
	
	totalGuess++;

}

alert("Congratulations! You got the answer in: " + totalGuess +" guesses!");	




// Add Interactivity
var guessInput = document.getElementById("numberForm");
var guessButton = document.getElementById("guess");
var refreshButton = document.getElementById("refresh");
var lastGuessHolder = document.getElementById("totalGuess");
var totalGuessHolder = document.getElementById("lastGuess");
var scoreHolder = document.getElementById("score");

///

var submitGuess = function() {
	console.log("Submit Guess");
	alert("SURE!!!!!")

	//Submit Guess
	//when button is pressed, let userChoice be submitted
	// submit input from input (number)
}

guessButton.onclick = submitGuess;
//Restart game
var refreshGuess = function(){
	console.log("Refresh Game");
	// Refresh computerChoice	
	// Refresh totalGuess
	//Refresh previousGuess

}


//Display Guess
var displayPreviousGuess = function() {
	console.log("previous Guess");
	//The previousGuess from the input should be displayed
}

var displayTotalGuess = function() {
	console.log("Total Guess");
	//The totalGuess from the input should be displayed
}


//Display Score
var displayScore = function() {
	//The total score should be displayed
	console.log("Score");
}









