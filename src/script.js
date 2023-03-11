const computerPlay = () => {
  const items = ['Rock', 'Paper', 'Scissors'];

  return (items[Math.floor(Math.random() * items.length)]);
}

let playerScore = 0;
let computerScore = 0;

const playRound = (player, computer) => {

  let playerPick = player.toUpperCase();
  let computerPick = computer.toUpperCase();

  console.log(`Player chose ${playerPick}`);
  console.log(`Computer chose ${computerPick}`);
  if (playerPick === computerPick) {
    return "It's a tie !";
  }

  if ((playerPick == "ROCK" && computerPick == "SCISSORS") || (playerPick == "PAPER" && computerPick == "ROCK") ||
    (playerPick == "SCISSORS" && computerPick == "PAPER")) {
    playerScore++;
    return `You win! ${player} beats ${computer}.`;
  } else {
    computerScore++;
    return `You lose! ${computer} beats ${player}.`;
  }
}


const game = () => {
  for (let i = 0; i < 5; i++) {
    const player = prompt("Rock,Paper,Scissors");
    const computer = computerPlay();

    console.log(`=======ROUND ${i + 1}=======`);

    const result = playRound(player, computer);

    console.log(result);
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Player Score: ${playerScore}`);
  }

  console.log("========END OF GAME========");
  if (playerScore > computerScore) {
    console.log("Player Wins");
  } else if (playerScore < computerScore) {
    console.log("Computer Wins");
  } else {
    console.log("it's a tie")
  }
}

game();
