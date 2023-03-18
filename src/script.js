'use strict'

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const computer = document.querySelector('.computer-choice-text')
const verdict = document.querySelector('.winner-text')
const playerS = document.querySelector('.playerScore')
const computerS = document.querySelector('.computerScore')
const playAgainButton = document.getElementById('play-again-btn');

let playerScore = 0
let computerScore = 0
let result
let winner = ""

const playerHand = () => {
  return new Promise(resolve => {
    rock.addEventListener('click', () => {
      resolve('rock');
    });

    paper.addEventListener('click', () => {
      resolve('paper');
    });

    scissors.addEventListener('click', () => {
      resolve('scissors');
    });
  });
};


/**
 * Computer Play
 */
const computerPlay = () => {
  const items = ['Rock', 'Paper', 'Scissors'];

  return (items[Math.floor(Math.random() * items.length)]);
}

/**
 * Round Outcome
 */
const playRound = (player, computer) => {
  if (player === computer) {
    return "It's a tie !"
  }
  if ((player == "rock" && computer == "Scissors") || (player == "paper" && computer == "Rock") ||
    (player == "scissors" && computer == "Paper")) {
    return 'player'
  } else {
    return 'computer'
  }
}

/**
 * Game
 */
const game = async () => {
  for (let i = 0; i < 5; i++) {
    const playerPick = await playerHand();
    const computerPick = computerPlay();
    computer.textContent = computerPick;
    result = playRound(playerPick, computerPick);
    if (result == 'player') {
      playerScore++;
      playerS.textContent = playerScore
    }
    if (result == 'computer') {
      computerScore++;
      computerS.textContent = computerScore
    }
  }
  // determine winner based on scores
  if (playerScore > computerScore) {
    winner = 'Player';
  } else if (playerScore < computerScore) {
    winner = 'Computer';
  } else {
    winner = 'Tie';
  }

  verdict.textContent = winner;
};

playAgainButton.addEventListener('click', resetGame);

function resetGame() {
  // Reset the player and computer scores
  playerScore = 0;
  computerScore = 0;

  playerS.textContent = playerScore
  computerS.textContent = computerScore

  // Clear the winner text and computer choice text
  verdict.textContent = ""
  computer.textContent = "";

  game()
}


game();