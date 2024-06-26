// Pseduocode

// Player chooses to play rock, paper or scissors
// Computer responds with rock, paper, or scissors at random
// Win, lose, or tie determined for each player
// Scoreboard reflects wins, ties, and losses and play total for each player
// Repeat until dinner is ready

// Algorithm

// User prompted to enter R, P, or S input to begin play
// Browser logs an invalid input as necessary and prompts user to try again
// Computer responds with random output of R, P, or S and alerts user
// Results compared and win, loss, or tie allocated to user and computer

// Coding

// Play variables declared for Dave Bowman, R, P, S (const variables) with score board set to 0
// Outcomes variables declared, i.e. W, L, T (const)
let wins = 0;
let losses = 0;
let ties = 0;
let davePlayed = { R: 0, P: 0, S: 0 };

// Random HAL 9000 function:  Needs constant variables (R, P, S), then random number generator for the variables with a return to select one of the variables
function halPlayed() {
  const rps = ["R", "P", "S"];
  const randomHal = Math.floor(Math.random() * rps.length);
  return rps[randomHal];
}

// Random win messages function so it can return different quotes from HAL 9000 for each win (needs to start with "WIN:" then add random message)
function winMessage() {
  const won = [
    "Have you been doing some more work?",
    "I think you've improved a great deal.",
    "That's a very nice rendering, Dave.",
    "Dave, stop.  Stop, will you?",
    "I'm afraid, Dave.",
    "Dave, my mind is going.",
  ];
  const randomWin = Math.floor(Math.random() * won.length);
  return won[randomWin];
}

// Random loss messages function so it can return different quotes from HAL 9000 for each loss (needs to start with "LOSE:" then add random message")
function lossMessage() {
  const lost = [
    "Sorry about this.",
    "I know things haven't been going very well.",
    "This mission is too important for me to allow you to jeopardize it.",
    "It can only be attributable to human error.",
    "… you are going to find that rather difficult.",
  ];
  const randomLoss = Math.floor(Math.random() * lost.length);
  return lost[randomLoss];
}

// Quote for Draw message:  "Draw: Be more original, Dave." (need to add to function for draw message)

// Function to determine the winner of the round
function determineWinner(davePlay, halPlay) {
  if (davePlay === halPlay) {
    return "tie";
  } else if (
    (davePlay === "R" && halPlay === "S") ||
    (davePlay === "P" && halPlay === "R") ||
    (davePlay === "S" && halPlay === "P")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to play a round of Rock, Paper, Scissors and validate input
function playRound() {
  let davePlay = prompt(
    "Let's begin, Dave:\n Enter R, P, or S for Rock, Paper, or Scissors:"
  ).toUpperCase();
  while (!["R", "P", "S"].includes(davePlay)) {
    davePlay = prompt(
      "I'm sorry, Dave.  I'm afraid I can't do that.\n    ONLY enter R, P, or S for Rock, Paper, or Scissors:"
    ).toUpperCase();
  }

  // Update the scoreboard with Dave's play
  davePlayed[davePlay]++;

  // Make HAL play
  let halPlay = halPlayed();
  alert(`HAL 9000 played: ${halPlay}`);

  // Update the scoreboard with results and display win, lose, or draw messages
  let result = determineWinner(davePlay, halPlay);
  if (result === "win") {
    wins++;
    alert(`You win:\n ${winMessage()}`);
  } else if (result === "lose") {
    losses++;
    alert(`You lose:\n   ${lossMessage()}`);
  } else {
    ties++;
    alert(`Draw:\n Be more original, Dave.`);
  }
}

// 'finished playing' ambiguous but defined here as end of first round
// User prompted with their win, lose, or draw overall score
// User prompted with how many times they played rock, paper, or scissors
function finalScore() {
  alert(
    `Thank you for a very enjoyable game:\n Wins: ${wins}\n Losses: ${losses}\n Ties: ${ties}`
  );
  alert(
    `Dave played:\n Rock: ${davePlayed.R}\n Paper: ${davePlayed.P}\n Scissors: ${davePlayed.S}`
  );
}

// User prompted with option to play again
// Had to add the event listener to have the game start after the page fully loads since I put the transition times in.
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector("body").style.opacity = 1;

    alert("Hello, Dave.  Ready to Play Rock, Paper, Scissors?");

    let anotherRound = true;
    while (anotherRound) {
      playRound();
      anotherRound = confirm("Another round, Dave?");
    }

    finalScore();
  }, 500);

  const refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", function () {
    location.reload();
  });
});
