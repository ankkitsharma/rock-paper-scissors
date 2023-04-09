function getComputerChoice() {
    //getting random no from 0 to 2
    rnum = Math.floor(Math.random() * 3);
    //converting random no into random choice
    if (rnum === 0)
        return "rock";
    else if (rnum === 1)
        return "paper";
    else
        return "scissors";
}

//following integers display no of game won by each party
let pwin = 0;
let cwin = 0;

//call this function to start the game
function game() {
    console.log("Welcome to the game");
    //display game number
    console.log(`Game ${i}`);
    console.log("Your have to select between rock/paper/scissors");
    playerSelection = (prompt("Enter selection to begin game: ")).toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    //The final results:
    whoWinGame();
}
    
//Call this function to play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        whoWinRound("draw");
    else if (playerSelection === "rock" && computerSelection == "scissors") {
        whoWinRound("player");
        return pwin++;
    }
    else if (playerSelection === "rock" && computerSelection == "paper") {
        whoWinRound("computer");
        return cwin++;
    }
    else if (playerSelection === "scissors" && computerSelection == "rock") {
        whoWinRound("computer");
        return cwin++;
    }
    else if (playerSelection === "scissors" && computerSelection == "paper") {
        whoWinRound("player");
        return pwin++;
    }
    else if (playerSelection === "paper" && computerSelection == "rock") {
        whoWinRound("player");
        return pwin++;
    }
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        whoWinRound("computer");
        return cwin++;
    }
}

//call this function to say who wins the round
function whoWinRound(name) {
    if (name === "player")
        console.log("Player wins this round");
    else if (name === "computer")
        console.log("Computer wins this round");
    else
        console.log("This round is a draw")
}

//condition to decide who wins the game
function whoWinGame() {
    if (pwin === cwin)
        console.log("This game is a draw");
    else if (pwin > cwin)
        console.log("Player wins the game");
    else
        console.log("Computer wins the game");
}