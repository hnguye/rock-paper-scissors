let playerScore = 0;
let computerScore = 0;
let roundResult;
let roundNumber = 0;

// Function that creates the Computers choice at random
function computerPlay() {
  let result = Math.random();

  if (result <= 0.33) {
    alert("Computer selected Rock");
  } else if (result <= 0.66) {
    alert("Computer selected Paper");
  } else {
    alert("Computer selected Scissors");
  }
}

// Function that runs computerPlay() and then creates a players choice and compares the two
function playRound(playerSelection, computerSelection) {
  let choice = prompt("Round " + roundNumber + "\n\nRock, Paper, or Scissors?");
  playerSelection =
    choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  computerSelection = computerPlay();

  console.log(
    "Player chose: " +
      playerSelection +
      " | " +
      "Computer chose: " +
      computerSelection
  );

  // Error & Draw check
  if (
    playerSelection !== "Rock" &&
    playerSelection !== "Paper" &&
    playerSelection !== "Scissors"
  ) {
    alert(
      "Looks like the player made an invalid choice, awaiting a new choice..."
    );
    prompt('Please enter a valid choice. ("Rock", "Paper", or "Scissors")');
    return playRound();
  } else if (playerSelection === computerSelection) {
    roundResult = "Draw!";
    return;
  }

  // Player selects Rock
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") {
      computerScore++;
      roundResult = "You lose! Rock gets covered by Paper!";
      return;
    } else {
      playerScore++;
      roundResult = "You win! Rock smashes Scissors!";
      return;
    }
  }

  // Player selects Paper
  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      computerScore++;
      roundResult = "You lose! Paper gets cut by Scissors!";
      return;
    } else {
      playerScore++;
      roundResult = "You win! Paper covers Rock!";
      return;
    }
  }

  // Player selects Scissors
  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      computerScore++;
      roundResult = "You lose! Scissors get smashed by Rock!";
      return;
    } else {
      playerScore++;
      roundResult = "You win! Scissors cut Paper!";
      return;
    }
  }
}

// Loops playRound 5 times to play a full game of rock paper scissors
function game() {
  // Loop to play through 5 games
  for (i = 1; i < 4; i++) {
    roundNumber++;
    // Play a round of Rock Paper Scissors
    playRound();

    console.log(roundResult);

    // Final score check
    if (i === 3) {
      if (playerScore > computerScore) {
        alert(
          "Congratulations! You won " +
            playerScore +
            " to " +
            computerScore +
            "."
        );
        return;
      } else if (playerScore < computerScore) {
        alert(
          "Sorry, it looks like you lost " +
            playerScore +
            " to " +
            computerScore +
            "."
        );
        return;
      } else {
        alert(
          "Looks like it was a draw! " +
            playerScore +
            " to " +
            computerScore +
            "."
        );
        return;
      }
    }
  }
}

game();
