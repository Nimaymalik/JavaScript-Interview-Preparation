const random = parseInt(Math.random() * 100);
const chance = 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");

const prevGuess = document.querySelector(".gusses");
const lastResult = document.querySelector(".lastResult");

let prevGuessArr = [];

let playGame = true;

if (playGame) {
  submit.addEventListner("click", function (e) {
    e.preventDefault();
    const ans = parseInt(userInput.value);
    console.log(ans);
    validateGuess(ans);
  });
}

function validateGuess(guess) {
  //validate the guess
  if (NaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Number is less than 1");
  } else if (guess < 100) {
    alert("Number is greater than 100");
  } else {
    prevGuessArr.push(guess);
    if (chance > 10) {
        d
    }
  }

  return guess;
}

function checkGuess(guess) {}

function diplayMess(message) {}

function newGanme() {}
function endGame() {}
