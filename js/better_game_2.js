const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, scissors?");
  startGame ? playGame() : alert("Ok, maybe next time.");
}

// Game flow
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);

    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }

    playerChoice = evaluatePlayerChoice(playerChoice);

    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
}

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = () => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice === "rock" || "paper" || "scissors") {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("Youd didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (playerOne, computer) => {
  const winner = playerOne === computer 
  ? "Tie Game!" 
  : playerOne === "rock" && computer === "paper" 
  ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
  : playerOne === "rock" && computer === "scissors"
  ? `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One Wins!`
  : playerOne === "paper" && computer === "scissors"
  ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
  : playerOne === "paper" && computer === "rock" 
  ? `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One Wins!`
  : playerOne === "scissors" && computer === "rock" 
  ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer Wins!` 
  : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One Wins!`; 

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};