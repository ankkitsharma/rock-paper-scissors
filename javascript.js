function getComputerChoice() {
    //getting random no from 0 to 2
    rnum = Math.floor(Math.random() * 3);
    //converting random no into random choice
    if(rnum === 0)
        return "rock";
    else if( rnum === 1)
        return "paper";
    else
        return "scissors";
}

//call this function to start the game
function game() {
    console.log("Welcome to the game");
    //following integers display no of game won by each party
    pwin = 0;
    cwin = 0;
    //loop to play 5 games
    for(i = 1; i <= 5; i++) {
        //display game number
        console.log(`Game ${i}`);
        console.log("Your have to select between rock/paper/scissors");
        playerSelection = toLowerCase(prompt("Enter selection to begin game: "));
        computerSelection = getComputerChoice();
        //round starts
        function playRound(playerSelection, computerSelection) {
            if(playerSelection === computerSelection)
                whoWinRound("draw");
            if(playerSelection === "rock" && computerSelection == "scissors")
                whoWinRound("player");
                pwin ++;
            if(playerSelection === "rock" && computerSelection == "paper")
                whoWinRound("computer");
                cwin ++;
            if(playerSelection === "scissors" && computerSelection == "rock")
                whoWinRound("computer");
                cwin ++;
            if(playerSelection === "scissors" && computerSelection == "paper")
                whoWinRound("player");
                pwin ++;
            if(playerSelection === "paper" && computerSelection == "rock")
                whoWinRound("player");
                pwin ++;
            if(playerSelection === "paper" && computerSelection == "scissors")
                whoWinRound("computer"); 
                cwin ++;
        }
    }
    //condition to decide who wins the game
    if(pwin > cwin)
        console.log("player wins the game");
    else 
        console.log("computer wins the game");

}

//call this function to say who wins the round
function whoWinRound(name) {
    if(name === "player")
        console.log("Player wins this round");
    else if(name === "computer")
        console.log("Computer wins this round");
    else 
        console.log("This round is a draw")
}