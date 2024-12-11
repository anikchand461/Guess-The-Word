Features:
	1.	Word Selection:
	•	The game selects a random word from a predefined list (words).
	2.	Difficulty Levels:
	•	Adjustable lives based on difficulty selected (easy, medium, hard).
	3.	Dynamic UI Updates:
	•	Dynamically generates the keyboard and word display.
	•	Reveals the first and last letters of the word at the start.
	4.	Interactive Buttons:
	•	Clicking a letter triggers visual animations, disables the button, and updates the game state.
	5.	Win/Lose Conditions:
	•	Checks if the player has guessed all letters or if lives reach zero.
	•	Displays a congratulatory or game-over message accordingly.
	6.	CSS Integration:
	•	Utilizes classes like bg-gradient-to-r and animate-pulse for vibrant, interactive effects.
	7.	Restart and Difficulty Change:
	•	Restart button resets the game.
	•	Difficulty dropdown dynamically changes the number of lives and restarts the game.

How It Works:
	1.	Game Initialization:
	•	initializeGame sets up the word display, keyboard, and lives based on difficulty.
	•	Adds event listeners for the keyboard buttons and restart functionality.
	2.	Guess Handling:
	•	The handleGuess function handles letter guesses, checking if the letter exists in the word.
	•	Updates the word display if the guess is correct or reduces lives otherwise.
	3.	Game State Management:
	•	The updateWordDisplay function reveals correctly guessed letters.
	•	checkWin and endGame manage win/loss states and update the UI accordingly.
	4.	Animations:
	•	Animations like animate-bounce and animate-pulse enhance feedback for actions.

Enhancements to Consider:
	•	Mobile Responsiveness: Ensure the game UI is friendly for smaller screens.
	•	Hint System: Optionally add a hint feature for harder difficulties.
	•	Leaderboard: Store high scores locally using localStorage or integrate with a backend.
	•	Timer: Introduce a timer for additional challenge.

This implementation is engaging and well-structured for educational or entertainment purposes.


Hi I am Ayan Roy
Radhe  Radhe 