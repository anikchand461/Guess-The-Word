# Hangman Game Features and Overview

## Features

### 1. Word Selection
- The game selects a random word from a predefined list (`words`).

### 2. Difficulty Levels
- Adjustable lives based on the selected difficulty level (easy, medium, hard).

### 3. Dynamic UI Updates
- Dynamically generates the keyboard and word display.
- Reveals the first and last letters of the word at the start.

### 4. Interactive Buttons
- Clicking a letter:
  - Triggers visual animations.
  - Disables the button.
  - Updates the game state.

### 5. Win/Lose Conditions
- Checks if the player has:
  - Guessed all the letters.
  - Lives reduced to zero.
- Displays a congratulatory or game-over message accordingly.

### 6. CSS Integration
- Utilizes classes like `bg-gradient-to-r` and `animate-pulse` for vibrant, interactive effects.

### 7. Restart and Difficulty Change
- **Restart Button**: Resets the game.
- **Difficulty Dropdown**: Dynamically changes the number of lives and restarts the game.

---

## How It Works

### 1. Game Initialization
- `initializeGame`:
  - Sets up the word display, keyboard, and lives based on the difficulty.
  - Adds event listeners for the keyboard buttons and restart functionality.

### 2. Guess Handling
- `handleGuess`:
  - Handles letter guesses.
  - Checks if the letter exists in the word.
  - Updates the word display if correct or reduces lives if incorrect.

### 3. Game State Management
- `updateWordDisplay`: Reveals correctly guessed letters.
- `checkWin` and `endGame`: Manage win/loss states and update the UI accordingly.

### 4. Animations
- Animations like `animate-bounce` and `animate-pulse` enhance feedback for user actions.

---

## Enhancements to Consider
- **Mobile Responsiveness**: Ensure the game UI is user-friendly on smaller screens.
- **Hint System**: Optionally add a hint feature for harder difficulties.
- **Leaderboard**: Store high scores:
  - Locally using `localStorage`.
  - Integrate with a backend for more functionality.
- **Timer**: Introduce a timer for additional challenge.

---

## Summary
This Hangman game implementation is engaging, well-structured, and ideal for educational or entertainment purposes. Its dynamic features, CSS effects, and potential for enhancements make it a versatile project.