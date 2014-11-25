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
var hotter = document.getElementById("hot");
var colder = document.getElementById("cold");

/***************************************************************************
 
							GAME LOGIC 

***************************************************************************/

var computerChoice = Math.floor(Math.random() * 100);
console.log(computerChoice);

var previousChoice = 0;

var totalGuess = 1; //Initialises the totalGuess counter to 0

/****************************************************
THIS FUNCTION RUNS WHEN THE "GUESS" BUTTON IS PRESSED
******************************************************/

var startGame = function() {
	var userChoice = guessInput.value;
	
	if ((typeof userChoice !== typeof 1) && (userChoice < 1 || userChoice > 100)) {
		feed.innerHTML="Input must be a number between 1 and 100";
		feed.style.color=" ";
		guessInput.value = " ";
	}

	else {
		console.log(previousChoice);

		if(userChoice == computerChoice){
			feed.style.backgroundColor="green";
			feed.style.fontSize = "1em";
			document.getElementById("hot").style.width = 100 + "%";
			document.getElementById("cold").style.width = 0;
			guessInput.value = " ";
			feed.innerHTML="Congratulations! You got the answer in " + totalGuess +" guess(es)!";	
			var score = Math.floor((1/totalGuess) * 1000); 
			scoreHolder.innerHTML = score;
		}
		
		else if(Math.abs(computerChoice - userChoice) > Math.abs(computerChoice - previousChoice)) {
			feed.style.backgroundColor="blue";
			feed.innerHTML="Getting Colder";
			document.getElementById("hot").style.width = (100 - Math.abs(userChoice - computerChoice)) + "%";
			document.getElementById("cold").style.width = (0 + Math.abs(userChoice - computerChoice)) + "%";
			guessInput.value = " ";
			console.log("Getting Hotter");
			console.log(previousChoice);
			
		}

		else if(Math.abs(computerChoice - userChoice) < Math.abs(computerChoice - previousChoice)) {
			feed.style.backgroundColor="red";
			feed.innerHTML="Getting Hotter";
			document.getElementById("cold").style.width = (0 + Math.abs(userChoice - computerChoice)) + "%";
			document.getElementById("hot").style.width = (100 - Math.abs(userChoice - computerChoice)) + "%";
			guessInput.value = " ";
			console.log("Getting Colder");
			console.log(previousChoice);
		}
		else if(Math.abs(computerChoice - userChoice) == Math.abs(computerChoice - previousChoice)) {
			feed.style.backgroundColor="black";
			feed.innerHTML="Neither Hotter nor Colder";
			guessInput.value = " ";
			console.log("Neither Hotter nor Colder");
			console.log(previousChoice);
		
		}

		

		previousChoice = userChoice; //after every guess, the chosen number is passed into the "PreviousChoice" variable;
		totalGuess++;

		}

};

/**********************************************************************************

			THIS FUNCTION REFRESHES THE COMPUTER'S CHOICE, TOTAL GUESS AND PREVIOUS GUESS

***********************************************************************************/

var refreshGame = function() {
	confirm("Refreshing Game changes the Computer's Number? Confirm Refresh?");// Try to make an if statement that checks if the user clicks cancel
	computerChoice = Math.floor(Math.random() * 100);
	previousChoice = 0;
	totalGuess = 1;
	feed.style.backgroundColor="lightblue";
	feed.innerHTML=" ";
	scoreHolder.innerHTML = " ";
	console.log(computerChoice);

}


guessButton.addEventListener("click", startGame); // call the "Guess Button" to start the game;

//Stop Form Submission on Enter Key Press
guessInput.addEventListener("keypress", function (e) {
            
            if (e.which == 13) {
                startGame();
                e.preventDefault();
             }
             }); 

refreshButton.addEventListener("click", refreshGame); // call the "Refresh Button" to start the game;



// //Display Score
// var displayScore = function() {
// 	//The total score should be displayed
// }









