const words = ['javascript', 'python', 'hangman', 'developer', 'programming'];
let selectedWord = '';
let guessedLetters = [];
let lives = 6;

const buttons = document.querySelectorAll("#keyboard button");

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Add the 'clicked' class to trigger the animation
        button.classList.add("clicked");

        // Remove the 'clicked' class after the animation ends
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300); // Duration matches animation duration in CSS
    });
});

const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const message = document.getElementById('message');
const livesDisplay = document.getElementById('lives');
const restartButton = document.getElementById('restart-button');
const difficultySelect = document.getElementById('difficulty');

function initializeGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    setLivesBasedOnDifficulty();
    wordDisplay.innerHTML = '';
    keyboard.innerHTML = '';
    message.textContent = '';
    message.classList.add('hidden');
    restartButton.classList.add('hidden');

    // Display the word
    selectedWord.split('').forEach((letter, index) => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter', 'text-purple-600');
        if (index === 0 || index === selectedWord.length - 1) {
            letterElement.textContent = letter;
        } else {
            letterElement.textContent = '_';
        }
        wordDisplay.appendChild(letterElement);
    });

    // Create the keyboard
    for (let i = 65; i <= 90; i++) {
        const button = document.createElement('button');
        button.textContent = String.fromCharCode(i);
        button.classList.add(
            'bg-gradient-to-r',
            'from-purple-500',
            'to-pink-500',
            'text-white',
            'rounded',
            'hover:bg-purple-600',
            'focus:outline-none'
        );
        button.addEventListener('click', () => handleGuess(button));
        keyboard.appendChild(button);
    }

    // Show lives
    livesDisplay.textContent = `Lives: ${lives}`;
}

function setLivesBasedOnDifficulty() {
    const difficulty = difficultySelect.value;
    if (difficulty === 'easy') {
        lives = 10;
    } else if (difficulty === 'medium') {
        lives = 6;
    } else if (difficulty === 'hard') {
        lives = 3;
    }
}

function handleGuess(button) {
    const guessedLetter = button.textContent.toLowerCase();
    button.disabled = true;
    button.classList.add('opacity-50', 'bg-gray-400');

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        updateWordDisplay();
        checkWin();
    } else {
        lives--;
        livesDisplay.textContent = `Lives: ${lives}`;
        livesDisplay.classList.add('text-red-600', 'animate-pulse');
        setTimeout(() => livesDisplay.classList.remove('animate-pulse'), 500);
        if (lives === 0) {
            endGame(false);
        }
    }
}

function updateWordDisplay() {
    const letters = wordDisplay.querySelectorAll('.letter');
    selectedWord.split('').forEach((letter, index) => {
        if (guessedLetters.includes(letter) || index === 0 || index === selectedWord.length - 1) {
            letters[index].textContent = letter;
            letters[index].classList.add('text-green-500', 'animate-bounce');
        }
    });
}

function checkWin() {
    const currentWord = Array.from(wordDisplay.querySelectorAll('.letter')).map(l => l.textContent).join('');
    if (currentWord === selectedWord) {
        endGame(true);
    }
}

function endGame(isWin) {
    message.textContent = isWin ? '🎉 Congratulations! You Won! 🎉' : `💀 Game Over! The word was "${selectedWord}".`;
    message.classList.remove('hidden');
    message.classList.add(isWin ? 'text-green-500' : 'text-red-500');
    restartButton.classList.remove('hidden');
    keyboard.querySelectorAll('button').forEach(button => button.disabled = true);
}

restartButton.addEventListener('click', initializeGame);

// Listen to difficulty changes
difficultySelect.addEventListener('change', initializeGame);

// Start the game on load
initializeGame();
