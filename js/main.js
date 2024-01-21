// First Coding Challenge

// Write code that will return a random letter from your name

const name = "Aidan";
let random_letter = Math.floor(Math.random() * name.length);
console.log(name.charAt(random_letter));

// First interactive game
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors" ) {
      // computer choice

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" 
        : computerChoice === 2 ? "paper" 
        : "scissors";

      // Results
      let result = playerOne === computer 
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
        
      alert(result);
      
      let playAgain = confirm("Play again?");

      playAgain ? location.reload() : alert("Ok, thanks for playing!");
    } else {
      alert("You didn't enter rock, paper or scissors.")
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert('Ok maybe next time.');
}



