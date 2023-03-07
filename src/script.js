const computerPlay = () => {
  const items = ['Rock', 'Paper', 'Scissor'];

  return (items[Math.floor(Math.random() * items.length)]);
}



const playRound = (player, computer) => {

  let playerPick = player.toUpperCase();
  let computerPick = computer.toUpperCase();

  if (playerPick === computerPick) {
    return "It's a tie !";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return `You win! ${player} beats ${computer}.`;
  }

  return `You lose! ${computer} beats ${player}.`;
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const player = prompt("Rock,Paper,Scissor");
    const computer = computerPlay();
    const result = playRound(player, computer);

    console.log(result);
  }
}

game();