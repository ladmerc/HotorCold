var Game = {

guessInput: document.getElementById("numberForm"),
guessButton: document.getElementById("guess"),
refreshButton:  document.getElementById("refresh"),
lastGuessHolder: document.getElementById("totalGuess"),
totalGuessHolder:  document.getElementById("lastGuess"),
scoreHolder: document.getElementById("score"),
feed: document.getElementById("feedback"),
hotter: document.getElementById("hot"),
colder: document.getElementById("cold"),


init: function() {
	computerChoice= Math.floor(Math.random() * 100);
	console.log(this.computerChoice);
	previousChoice= null;
	totalGuess= 1
},

	
initialise: function() {
		 Game.guessInput.addEventListener("keypress", function (e) { 
																	            if (e.which == 13) {
																	                startGame();
																	                e.preventDefault();
																	            }
																	          });
	},

validate: function (userChoice) {
		if ((typeof userChoice !== typeof 1) && (userChoice < 1 || userChoice > 99)) {
		Game.feed.innerHTML="Input must be a number between 1 and 100";
		Game.feed.style.color="green";
		Game.guessInput.value = " ";
		}
	},


startGame: function(userChoice) {
	var userChoice = Game.guessInput.value;
	
	if(!Game.validate(userChoice)){
		return;
	}

	// if {
	// 	console.log(previousChoice);
		
		if((userChoice >  computerChoice) && (userChoice < previousChoice)) {
			Game.feed.style.backgroundColor="red";
			Game.feed.innerHTML="Getting Hotter";
			Game.guessInput.value = " ";
			Game.hotter.style.width = "10%";
			console.log("Getting Hotter");
			console.log(Game.previousChoice);
			
		}
		else if((userChoice > computerChoice) && (userChoice > previousChoice)) {
			Game.feed.style.backgroundColor="blue";
			Game.feed.innerHTML="Getting Colder";
			Game.guessInput.value = " ";
			console.log("Getting Colder");
			console.log(Game.previousChoice);
		
		}
		else if((userChoice < computerChoice) && (userChoice < previousChoice)) {
			Game.feed.style.backgroundColor="blue";
			Game.feed.innerHTML="Getting Colder";
			Game.guessInput.value = " ";
			console.log("Getting Colder");
			console.log(Game.previousChoice);
			
		}
		else if((userChoice < computerChoice) && (userChoice > previousChoice)) {
			Game.feed.style.backgroundColor="red";
			Game.feed.innerHTML="Getting Hotter";
			Game.guessInput.value = " ";
			console.log("Getting Hotter");
			console.log(Game.previousChoice);
			
		}
		else if(userChoice == previousChoice) {
			Game.feed.style.backgroundColor="black";
			Game.feed.innerHTML="Neither Hotter nor Colder";
			Game.guessInput.value = " ";
			console.log("Neither Hotter nor Colder");
			console.log(Game.previousChoice);
		
		}

		else if(userChoice == computerChoice){
			Game.feed.style.backgroundColor="green";
			Game.feed.style.fontSize = "1em";
			Game.guessInput.value = " ";
			feed.innerHTML="Congratulations! You got the answer in: " + totalGuess +" guesses!";	
		}

		previousChoice = userChoice; 
		totalGuess++;

		},

refreshGame: function() {
	confirm("Refreshing Game changes the Computer's Number? Confirm Refresh?");
	Game.computerChoice = Math.floor(Math.random() * 100);
	Game.previousChoice = null;
	Game.totalGuess = 0;
	Game.feed.style.backgroundColor="lightblue";
	Game.feed.innerHTML=" "
	console.log(Game.computerChoice);
}

}


Game.guessButton.addEventListener("click", function(){

	Game.startGame();
}); 
 

Game.refreshButton.addEventListener("click", function(){
	Game.refreshGame();
}); 


