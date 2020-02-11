let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below
function generateTarget() {
  return Math.floor(Math.random());
}

function compareGuesses(humGuess, comGuess, num) {
  if (humGuess === num) {
    return true
  } else {
    return false
  }
}

function updateScore(winner) {
  if (winner === 'human') {
      humanScore += 1;
      } else {
        computerScore += 1;
      }
}

function advanceRound() {
  currentRoundNumber += 1;
}
