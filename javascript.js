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