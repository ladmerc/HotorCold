var computerChoice = Math.floor(Math.random() * 100);
console.log(computerChoice);
var userChoice = prompt("Guess a whole number between 0 and 100");
var totalGuess = 1;

alert("Getting Hotter");

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

alert("Congratulations, you got the number");

if(totalGuess === 1){
	alert("You got the number in one guess! Bravo");
}
else {
	alert("You got the answer in: " + totalGuess +" guesses!");	
}


// var checkGuess = function(userChoice) 