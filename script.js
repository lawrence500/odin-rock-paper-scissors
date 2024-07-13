const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
};

const getHumanChoice = () => {
  let humanChoice = prompt(`round ${round}\nchoose (rock, paper, scissors)`);
  return humanChoice;
};

const rewardText = (winner) => {
  return console.log(`${winner} wins 1 point`);
};

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
    round++

    if (round >= 6){
      if(humanScore > computerScore){
        alert(`game over! human won\n human-points: (${humanScore})\n computer-points: (${computerScore})`)
        clearInterval(startGame)
      } else{
        alert(`game over! computer won\n computer-points(${computerScore})\n human-points: (${humanScore})`)
        clearInterval(startGame)
      }
    }

    if (humanChoice === computerChoice) {
      console.log("draw...");
    }
  
    if (humanChoice === "paper" && computerChoice === "rock") {
      rewardText("human");
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      rewardText("computer");
      computerScore++;
    }
  
    if (humanChoice === "scissors" && computerChoice === "paper") {
      rewardText("human");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      rewardText("computer");
      computerScore++;
    }
  
    if (humanChoice === "rock" && computerChoice === "scissors") {
      rewardText("human");
      humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      rewardText("computer");
      computerScore++;
    }  
}

function playGame() {
  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  playRound(humanSelection, computerSelection)

  return console.log(round)

}

if(confirm('startgame')){
let startGame  = setInterval(() => {playGame()}, 1000)
}