//INITIALISE VARIABLES

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
 
    // CALCULATING RESULTS 

    function getGameWinner (computerGameScore, playerGameScore) {
        if (computerGameScore > playerGameScore) {
            return "Computer wins this game";
        } else if (playerGameScore > computerGameScore) {
            return "You win this game";
        } else {
            return "Draw";
        }
    }
    function getWinner (computerTotalScore, playerTotalScore) {
        if (computerTotalScore > playerTotalScore) {
            return "Computer wins";
        } else if (playerTotalScore > computerTotalScore) {
            return "You win";
        } else {
            return "Draw";
        }
    }
    result = getGameWinner (computerGameScore, playerGameScore);
    overallResult = getWinner (computerTotalScore, playerTotalScore);
    gamesPlayed++;
    alert (`${playerMove} v ${computerMove} \r${result} \r \rTOTALS \rYou:Won:${playerWinsScore} Drawn:${playerDrawsScore} Lost:${playerLossesScore} \r Computer:Won:${computerWinsScore} Drawn:${computerDrawsScore} Lost:${computerLossesScore}`);
    keepPlaying = confirm (`Carry on playing?`);
}
alert (`Games played: ${gamesPlayed}\rGames won: You ${playerTotalScore} v Computer ${computerTotalScore} \rGames drawn ${playerDrawsScore} \rEnd Result ${overallResult}! \r\rGAME OVER`);
