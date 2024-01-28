// First interactive game
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, or scissors.");

    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();

      if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors" ) {
        // computer choice
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];
  
        // Results
        const result = playerOne === computer 
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
        
        playGame = confirm("Play again?");
  
        if (!playGame) alert("Ok, thanks for playing.");
        continue;
      } else {
        alert("You didn't enter rock, paper or scissors.")
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  } 
} else {
  alert('Ok maybe next time.');
}
  
  