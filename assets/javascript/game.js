// GLOBAL VARIABLES
// *************************************************
// Arrays and Variables for holding data
var wordOptions = ["football", "basketball", "soccer", "tennis", "swimming", "track", "wrestling", "boxing",
				    "hockey", "golf", "nascar", "gymnastics", "bowling", "surfing"];
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
		guessesLeft--;
	}

	// Testing and Debugging
	console.log(blanksAndSuccesses)
}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if user won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		// Update the win counter in the HTML
		document.getElementById("winsCounter").innerHTML = winCount;
		startGame();

	} else if (guessesLeft == 0) { // Checks is user lsot
		lossCount++;
		alert("Nope, try again!");

		//Update the lose counter in the HTML
		document.getElementById("lossesCounter").innerHTML = lossCount;
		
		// Resets each round by starting function startGame again
		startGame();

	}
}
	
// MAIN PROCESS
// *************************************************
startGame();
// Initiates the code the first time


// Register the button pressed
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	//Testing & Debugging
	console.log(letterGuessed);
}







