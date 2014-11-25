  var Game = {
	guessInput: document.getElementById("numberForm"),
	guessButton: document.getElementById("guess"),
	refreshButton: document.getElementById("refresh"),
	lastGuessHolder: document.getElementById("totalGuess"),
	totalGuessHolder: document.getElementById("lastGuess"),
	scoreHolder: document.getElementById("score"),
	feed: document.getElementById("feedback"),
	hotter: document.getElementById("hot"),
	colder: document.getElementById("cold"),
	userChoice: document.getElementById("numberForm").value,

	displayComp: function() {
		console.log(this.computerChoice);
	},

	initialise: function() {
		this.previousChoice = 0;
		this.totalGuesses = 1;
		this.computerChoice = Math.floor(Math.random() * 100);
		this.displayComp();

	},

	displayPrev: function() {
		console.log(this.previousChoice);
	},

	validate: function() {
		if ((typeof this.userChoice !== typeof 1) && (this.userChoice < 1 || this.userChoice > 100)) {
		this.feed.innerHTML="Input must be a number between 1 and 100";
		this.feed.style.color=" ";
		this.guessInput.value = " ";
		}
		return true;
	},

	startGame: function() {

		if(this.validate()){
			this.displayPrev();

			if(this.userChoice == this.computerChoice){
				this.feed.style.backgroundColor="green";
				this.feed.style.fontSize = "1em";
				document.getElementById("hot").style.width = 100 + "%";
				document.getElementById("cold").style.width = 0;
				this.guessInput.value = " ";
				this.feed.innerHTML="Congratulations! You got the answer in: " + this.totalGuesses +" guess(es)!";	
				var score = Math.floor((1/this.totalGuess) * 1000); 
				this.scoreHolder.innerHTML = score; // get back here
			}
			
			else if(Math.abs(this.computerChoice - this.userChoice) > Math.abs(this.computerChoice - this.previousChoice)) {
				this.feed.style.backgroundColor="blue";
				this.feed.innerHTML="Getting Colder";
				document.getElementById("hot").style.width = (100 - Math.abs(this.userChoice - this.computerChoice)) + "%";
				document.getElementById("cold").style.width = (0 + Math.abs(this.userChoice - this.computerChoice)) + "%";
				this.guessInput.value = " ";
				console.log("Getting Hotter");
				console.log(this.previousChoice);
				
			}

			else if(Math.abs(this.computerChoice - this.userChoice) < Math.abs(this.computerChoice - this.previousChoice)) {
				this.feed.style.backgroundColor="red";
				this.innerHTML="Getting Hotter";
				document.getElementById("cold").style.width = (0 + Math.abs(userChoice - computerChoice)) + "%";
				document.getElementById("hot").style.width = (100 - Math.abs(userChoice - computerChoice)) + "%";
				this.guessInput.value = " ";
				console.log("Getting Colder");
				console.log(this.previousChoice);
			}
			else if(Math.abs(this.computerChoice - this.userChoice) == Math.abs(this.computerChoice - this.previousChoice)) {
				this.feed.style.backgroundColor="black";
				this.feed.innerHTML="Neither Hotter nor Colder";
				this.guessInput.value = " ";
				console.log("Neither Hotter nor Colder");
				console.log(this.previousChoice);
			
			}

			this.previousChoice = this.userChoice; //after every guess, the chosen number is passed into the "PreviousChoice" variable;
			this.totalGuess++;


		}
	}
	// refreshGame: function() {

	// }

};



Game.guessButton.addEventListener("click", Game.startGame.bind(Game)); 
// Game.refreshButton.addEventListener("click", Game.refreshGame); // call the "Refresh Button" to start the game;
Game.guessInput.addEventListener("keypress", function (e) {
            
            if (e.which == 13) {
                e.preventDefault();
                Game.startGame();
             }
             }); 

Game.initialise();

// call the "Guess Button" to start the game;




