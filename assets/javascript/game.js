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
	lettersinWord = chosenWord.split(""); // Have an array of selected letters
	// Change HTML to reflect round conditions
	

	// Testing / Debugging
	console.log(chosenWord);
	console.log(lettersinWord);
	
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





