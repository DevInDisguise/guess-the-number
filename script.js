// Generate the random number once
const randNum = Math.round(Math.random() * 100);
console.log("Random Number:", randNum);

// Get form elements
const form = document.querySelector(".form");
const guessField = document.getElementById("guessField");
const guessesDisplay = document.querySelector(".guesses");
const remainingDisplay = document.querySelector(".lastResult");
const feedback = document.querySelector(".lowOrHi");

let guesses = [];
let remaining = 3;
remainingDisplay.textContent = remaining
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission refresh

  const userGuess = parseInt(guessField.value, 10);

  // Check if input is valid
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  // Add guess to array and update remaining attempts
  guesses.push(userGuess);
  remaining--;

  // Update UI
  guessesDisplay.textContent = guesses.join(", ");
  remainingDisplay.textContent = remaining;

  // Check guess
  if (userGuess === randNum) {
    feedback.textContent = "Congratulations! You guessed the correct number!";
    feedback.style.color = "green";
    form.querySelector(".guessSubmit").disabled = true; // Disable further submissions
  } else if (remaining === 0) {
    feedback.textContent = `Game Over! The correct number was ${randNum}.`;
    feedback.style.color = "red";
    form.querySelector(".guessSubmit").disabled = true; // Disable further submissions
  } else {
    feedback.textContent = userGuess < randNum ? "Too low!" : "Too high!";
  }

  // Clear input field
  guessField.value = "";
});
