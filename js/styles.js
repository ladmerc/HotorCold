/***************************************************************************

BINDING ALL THE NECESSARY HTML ELEMENTS TO JAVASCRIPT

***************************************************************************/


var guessInput = document.getElementById("numberForm");
var guessButton = document.getElementById("guess");
var refreshButton = document.getElementById("refresh");
var lastGuessHolder = document.getElementById("totalGuess");
var totalGuessHolder = document.getElementById("lastGuess");
var scoreHolder = document.getElementById("score");
var feed = document.getElementById("feedback");

/***************************************************************************

							GAME LOGIC 

***************************************************************************/

var computerChoice = Math.floor(Math.random() * 100);
console.log(computerChoice);

var previousChoice = null;

var totalGuess = 1; //Initialises the totalGuess counter to 0


/****************************************************
THIS FUNCTION RUNS WHEN THE "GUESS" BUTTON IS PRESSED
******************************************************/

var startGame = function() {
	var userChoice = guessInput.value;
	
	console.log(previousChoice);
	
	if((userChoice >  computerChoice) && (userChoice < previousChoice)) {
		feed.style.backgroundColor="red";
		feed.innerHTML="Getting Hotter";
		console.log("Getting Hotter");
		console.log(previousChoice);
		
	}
	else if((userChoice > computerChoice) && (userChoice > previousChoice)) {
		feed.style.backgroundColor="blue";
		feed.innerHTML="Getting Colder";
		console.log("Getting Colder");
		console.log(previousChoice);
	
	}
	else if((userChoice < computerChoice) && (userChoice < previousChoice)) {
		feed.style.backgroundColor="blue";
		feed.innerHTML="Getting Colder";
		console.log("Getting Colder");
		console.log(previousChoice);
		
	}
	else if((userChoice < computerChoice) && (userChoice > previousChoice)) {
		feed.style.backgroundColor="red";
		feed.innerHTML="Getting Hotter";
		console.log("Getting Hotter");
		console.log(previousChoice);
		
	}
	else if(userChoice == previousChoice) {
		feed.style.backgroundColor="black";
		feed.innerHTML="Neither Hotter nor Colder";
		console.log("Neither Hotter nor Colder");
		console.log(previousChoice);
	
	}

	else if(userChoice == computerChoice){
		feed.style.backgroundColor="green";
		feed.style.fontSize = "1em";
		feed.innerHTML="Congratulations! You got the answer in: " + totalGuess +" guesses!";	
}

	previousChoice = userChoice; //after every guess, the chosen number is passed into the "PreviousChoice" variable;
	totalGuess++;

	return false;
};

/**********************************************************************************

			THIS FUNCTION REFRESHES THE COMPUTER'S CHOICE, TOTAL GUESS AND PREVIOUS GUESS

***********************************************************************************/

var refreshGame = function() {
	confirm("Refreshing Game changes the Computer's Number? Confirm Refresh?");// Try to make an if statement that checks if the user clicks cancel
	computerChoice = Math.floor(Math.random() * 100);
	previousChoice = null;
	totalGuess = 0;
	feed.style.backgroundColor="lightblue";
	feed.innerHTML=" "
	console.log(computerChoice);

	return false;
}


guessButton.addEventListener("click", startGame); // call the "Guess Button" to start the game;
// guessInput.addEventListener("keypress", startGame);

refreshButton.addEventListener("click", refreshGame); // call the "Refresh Button" to start the game;


// //Display Score
// var displayScore = function() {
// 	//The total score should be displayed
// }









