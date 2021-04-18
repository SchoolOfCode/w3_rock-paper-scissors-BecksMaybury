let gamesPlayed = 0;
let playerWinsScore = 0;
let playerLossesScore = 0;
let playerDrawsScore = 0;
let computerWinsScore = 0;
let computerLossesScore = 0;
let computerDrawsScore = 0;
let computerMovesArray = ["rock", "paper", "scissors"];
let i;
let keepPlaying=true;

while (keepPlaying===true) {
    let computerMove;
    let playerMove = prompt ("player move: enter rock, paper, scissors");
    let playerGameScore = 0;
    let computerGameScore = 0;
    
    // GENERATING COMPUTER MOVE

    function generateComputerMove (i){
        i=Math.floor(Math.random()*3);
        computerMove = computerMovesArray[i];
        return computerMove;
    }
    generateComputerMove(i);

    function computerWinsGame () {
        computerGameScore++;
        computerWinsScore++;
        playerGameScore--;
        playerLossesScore++;
    }

    function playerWinsGame () {
        computerGameScore--;
        computerLossesScore++;
        playerGameScore++;
        playerWinsScore++;        
    }
    function drawGame () {
        computerDrawsScore++;
        playerDrawsScore++;
    }
    // CALCULATING MOVES AND RESULTS

    if (computerMove === "rock" && playerMove === "scissors") {
        computerWinsGame();
    }
    if (computerMove === "rock" && playerMove === "paper") {
        playerWinsGame();
    }
    if (computerMove === "rock" && playerMove === "rock"){
        drawGame();
    }
    if (computerMove === "paper" && playerMove === "scissors") {
        playerWinsGame();
    }
    if (computerMove === "paper" && playerMove === "rock") {
        computerWinsGame();
    }
    if (computerMove === "paper" && playerMove === "paper"){
        drawGame();
    }
    if (computerMove === "scissors" && playerMove === "paper") {
        computerWinsGame();
    }
    if (computerMove === "scissors" && playerMove === "rock") {
        playerWinsGame();
    }
    if (computerMove === "scissors" && playerMove === "scissors"){
        drawGame();
    }
    function getWinner (computerMove, playerMove) {
        if (computerGameScore > playerGameScore) {
            return getWinner--;
        } else if (playerGameScore > computerGameScore) {
            return getWinner ++;
        } else {
            return getWinner = 0;
        }
    }
    
    // CALCULATING RESULTS 
    
    let result = getWinner (computerMove, playerMove);
    console.log (`Computer chose ${computerMove}, player chose ${playerMove}, scores are ${computerGameScore} v ${playerGameScore}`);
    gamesPlayed++;
    console.log (gamesPlayed);
    console.log (`You: Won:${playerWinsScore} Drawn:${playerDrawsScore} Lost:${playerLossesScore} \r COMPUTER: Won:${computerWinsScore} Drawn:${computerDrawsScore} Lost:${computerLossesScore}`);
    alert (`You score: ${result}! Total Scores: You = ${playerGameScore} Computer = ${computerGameScore}`);
    keepPlaying = confirm ("Carry on playing?");
}
alert ("GAME OVER");
