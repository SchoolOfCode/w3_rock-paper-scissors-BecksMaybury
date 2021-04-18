let gamesPlayed = 0;
let playerWinsScore = 0;
let playerLossesScore = 0;
let playerDrawsScore = 0;
let playerTotalScore = 0;
let computerWinsScore = 0;
let computerLossesScore = 0;
let computerDrawsScore = 0;
let computerTotalScore = 0;
let computerMovesArray = ["rock", "paper", "scissors"];
let i;
let keepPlaying=true;
let result;
let overallResult;
let userName = prompt ("Enter your username");

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

    // CALCULATING SCORES

    function computerWinsGame () {
        computerGameScore=1;
        playerGameScore=0;
        computerTotalScore++;
        computerWinsScore++;
        playerLossesScore++;
    }

    function playerWinsGame () {
        playerGameScore=1;
        computerGameScore=0;
        playerWinsScore++;  
        playerTotalScore++;      
        computerLossesScore++;
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

    function getGameWinner (computerGameScore, playerGameScore) {
        if (computerGameScore > playerGameScore) {
            return "Computer wins this game";
        } else if (playerGameScore > computerGameScore) {
            return "Player wins this game";
        } else {
            return "Draw";
        }
    }
    function getWinner (computerTotalScore, playerTotalScore) {
        if (computerTotalScore > playerTotalScore) {
            return "Computer wins";
        } else if (playerTotalScore > computerTotalScore) {
            return "Player wins";
        } else {
            return "Draw";
        }
    }

    console.log (`Computer chose ${computerMove}, player chose ${playerMove}, scores are ${computerGameScore} v ${playerGameScore}`);
    
    // CALCULATING RESULTS 
    result = getGameWinner (computerGameScore, playerGameScore);
    overallResult = getWinner (computerTotalScore, playerTotalScore);
    gamesPlayed++;
    console.log (gamesPlayed);
    alert (`This game: ${result} \r \r TOTALS \r You: Won:${playerWinsScore} Drawn:${playerDrawsScore} Lost:${playerLossesScore} \r COMPUTER: Won:${computerWinsScore} Drawn:${computerDrawsScore} Lost:${computerLossesScore}`);
  //  alert (`You score: ${playerGameScore}! Total Scores: You = ${playerGameScore} Computer = ${computerGameScore}`);
    keepPlaying = confirm (`Carry on playing?`);
}
alert (`${overallResult} \r GAME OVER`);
