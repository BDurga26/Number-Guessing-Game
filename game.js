let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function submitGuess() {
    const guessInput = document.getElementById('guess');
    const result = document.getElementById('result');
    const message = document.getElementById('message');
    const guess = parseInt(guessInput.value);

    if (attempts < maxAttempts) {
        attempts++;

        if (guess < numberToGuess) {
            result.textContent = "Too low! Try again.";
        } else if (guess > numberToGuess) {
            result.textContent = "Too high! Try again.";
        } else {
            result.textContent = `Correct! The number was ${numberToGuess}. You guessed it in ${attempts} attempts.`;
            disableInput();
            return;
        }

        if (attempts === maxAttempts) {
            result.textContent = `You have reached the maximum attempts of ${maxAttempts}. The correct number was ${numberToGuess}. Please try again later.`;
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('message').textContent = "Guess a number between 1 and 100:";
    document.getElementById('result').textContent = '';
}
