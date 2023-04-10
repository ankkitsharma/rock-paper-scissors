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

const sbuttons = document.querySelectorAll(".sbutton");
    sbuttons.forEach((button) => {
        button.addEventListener("click", () => {
            game(button.id);
        })
    })

let pSelected = document.querySelector(".pSelected");
let cSelected = document.querySelector(".cSelected");

let pPoint = document.querySelector(".pPoint");
let cPoint = document.querySelector(".cPoint");
pPoint.textContent = 0;
cPoint.textContent = 0;

let whoWin = document.querySelector(".whoWin");

let nGame = document.querySelector(".nGame");
nGame.addEventListener("click", () => {
    pSelected.textContent = null;
    cSelected.textContent = null;
    pPoint.textContent = 0;
    cPoint.textContent = 0;
    whoWin.textContent = null;
    pwin = 0;
    cwin = 0;
})

//call this function to start the game
function game(bid) {
    playerSelection = bid;
    computerSelection = getComputerChoice();
    if(cwin === 5 || pwin === 5) {
        whoWinGame();
    } else {
        pSelected.textContent = playerSelection;
        cSelected.textContent = computerSelection;
        playRound(playerSelection, computerSelection);
    }
}
    
//Call this function to play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        whoWinRound("draw");
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        whoWinRound("player");
        pPoint.textContent = ++pwin;
        return pwin;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        whoWinRound("computer");
        cPoint.textContent = ++cwin;
        return cwin;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        whoWinRound("computer");
        cPoint.textContent = ++cwin;
        return cwin;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        whoWinRound("player");
        pPoint.textContent = ++pwin;
        return pwin;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        whoWinRound("player");
        pPoint.textContent = ++pwin;
        return pwin;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        whoWinRound("computer");
        cPoint.textContent = ++cwin;
        return cwin;
    }
}

//call this function to say who wins the round
function whoWinRound(name) {
    if (name === "player")
        whoWin.textContent = "Player wins this round";
    else if (name === "computer")
        whoWin.textContent = "Computer wins this round";
    else
        whoWin.textContent = "This round is a draw";
}

//condition to decide who wins the game
function whoWinGame() {
    if (pwin === cwin)
        whoWin.textContent = "This game is a draw";
    else if (pwin > cwin)
        whoWin.textContent = "Player wins the game";
    else
        whoWin.textContent = "Computer wins the game";
}