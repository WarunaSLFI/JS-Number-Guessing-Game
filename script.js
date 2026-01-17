// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

// Get DOM elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

// Function to check the guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        feedback.textContent = 'Please enter a valid number between 1 and 10!';
        feedback.className = '';
        return;
    }
    
    attempts++;
    
    // Check if guess is correct
    if (userGuess === targetNumber) {
        feedback.textContent = `🎉 Congratulations! You guessed the correct number: ${targetNumber}`;
        feedback.className = 'correct';
        attemptsDisplay.textContent = `Total attempts: ${attempts}`;
        submitBtn.disabled = true;
        guessInput.disabled = true;
    } else if (userGuess > targetNumber) {
        feedback.textContent = 'Too High! Try a lower number.';
        feedback.className = 'high';
        attemptsDisplay.textContent = `Attempts used: ${attempts}`;
    } else {
        feedback.textContent = 'Too Low! Try a higher number.';
        feedback.className = 'low';
        attemptsDisplay.textContent = `Attempts used: ${attempts}`;
    }
    
    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
submitBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Focus on input when page loads
window.addEventListener('load', function() {
    guessInput.focus();
});
