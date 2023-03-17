'use strict'

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const computer = document.querySelector('.computer-choice-text')
const verdict = document.querySelector('.winner-text')

let playerPick = ''

rock.addEventListener('click', () => {
    playerPick = 'rock'
})

paper.addEventListener('click', () => {
    playerPick = 'paper'
})

scissors.addEventListener('click', () => {
    playerPick = 'scissors'
})

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
const game = (playerPick) => {

    computer.value = computerPlay()
    const result = playRound(playerPick, computer.value);
    computer.textContent = computer.value



    verdict.value = result
    verdict.textContent = verdict.value
}

game(playerPick);