// GLOBAL VARIABLES
// *************************************************
// Arrays and Variables for holding data
var wordOptions = ["football", "basketball", "soccer", "tennis", "swimming", "track", "wrestling", "boxing"];
var chosenWord = ""; // Holds the selected word
var lettersInWord = []; // Counts the amount of letters in the word
var numBlanks = 0; // Based off the number of letters in the word
var blanksAndSuccesses = []; // f o o t _ _ _ _
var wrongLetters = []; // Holds array for wrong guesses

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// *************************************************
function startGame() {
	chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = chosenWord.split(""); // Have an array of selected letters
	numBlanks = lettersInWord.length; // Count the number of blanks needed

	// Resets each round
	guessesLeft = 9; // Number of guesses remaining back to 9
	wrongLetters = []; // Resets Letters already guessed to clear
	blanksAndSuccesses = []; // Resets the blanks and successes

	// Populate blanks and successes with right number of blanks
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push('_'); // populate the dashes 
	}

	// Populate HTML for 'Current Word'
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winsCounter").innerHTML = winCount;
	document.getElementById("lossesCounter").innerHTML = lossCount;

	// Testing / Debugging
	console.log(chosenWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
	
}


function checkLetters(letter) {
	// Check if letter exist anywhere in word
	alert(letter);

	var isLetterInWord = false;

	// This will determine whether the letter chosen is in chosenWord array
	for (var i=0; i<numBlanks; i++){
		if(chosenWord[i] == letter) {
			isLetterInWord = true;
			alert("letter found");
		}
	}

	// Check where in the word the letter exists, then populate out blanksAndSuccesses array
	if(isLetterInWord) {
		for (var i = 0; i< numBlanks; i++){
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	} else {
		//Push wrong letter into wrongLetters array
		wrongLetters.push(letter);
		numGuesses--;
	}

	// Testing and Debugging
	console.log(blanksAndSuccesses)
}
//Checks the letters that were guessed and put some code into it

	// Check if letter exists in code at all
	

	// Checks to see if the letter that was used matched any letter in the word
	

	// Check where in the word the letter exists, then populate out blanksAndSuccesses array
	

		// Letter wasnt found
		




	// Update the HTML to reflect the most recent count stats
	

	// Check if user won
	

		// Update the win counter in the HTML
		
	// Check is user lost
	
// MAIN PROCESS
// *************************************************
startGame();
// Initiates the code the first time


// Register the button pressed
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);

	//Testing & Debugging
	console.log(letterGuessed);
}







