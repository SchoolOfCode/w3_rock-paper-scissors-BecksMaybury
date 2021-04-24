//GAME VARIABLES

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
let overallResult = "(play game to see result)";
let validatedUserName = "Player";
let movesDisplay;

//DOM VARIABLES

let displayUserName = document.getElementById(playerScores);
storeUserName.addEventListener ("click", getUserName);
let result = document.getElementById("winner");

// GAME FUNCTIONS

// Player name input
function getUserName(){
    let userName = document.getElementById("userNameText").value;
    userName = userName.toLowerCase();
    let userNameFirstLetter = userName[0];
    userNameFirstLetter = userNameFirstLetter.toUpperCase();
    userName = userName.substring(1);
    validatedUserName = userNameFirstLetter + userName;
    playerScores.innerText = validatedUserName;
}

// Generate computer moves
function generateComputerMove (i){
    i=Math.floor(Math.random()*3);
    computerMove = computerMovesArray[i];
    return computerMove;
}

// Set images for moves

function displayComputerMove (){
    let randomImage = document.getElementById("computer-choice");
    randomImage.src=`images/${computerMove}.png`;
}

function displayPlayerMove(){
    let playerImage = document.getElementById("player-choice");
    playerImage.src=`images/${playerMove}.png`;
}

function displayMovesText(){
    let movesDisplay = document.getElementById("movesDisplayText");
    movesDisplay.innerText = `${playerMove} v ${computerMove}`;
}

// Scores calculations

function computerWinsGame () {
    computerGameScore=1;
    playerGameScore=0;
    computerTotalScore++;
    computerWinsScore++;
    playerLossesScore++;
    result.innerText = "Computer wins!";
}
function playerWinsGame () {
    playerGameScore=1;
    computerGameScore=0;
    playerWinsScore++;  
    playerTotalScore++;      
    computerLossesScore++;
    result.innerText = `${validatedUserName} wins!`;
}
function drawGame () {
    computerDrawsScore++;
    playerDrawsScore++;
    result.innerText = "Draw";
}
function getWinner () {
    if (computerTotalScore > playerTotalScore) {
        return overallResult = "Computer wins";
    } else if (playerTotalScore > computerTotalScore) {
        return overallResult = `${validatedUserName} wins`;
    } else {
        return overallResult = "Draw";
    }
}
    function updateScoresTable(){
        gamesPlayed++;
        let gamesTotal = document.getElementById("gamesPlayed");
        gamesTotal.innerText = gamesPlayed;
        let playerWins = document.getElementById("playerWins");
        playerWins.innerText = playerWinsScore;
        let playerLosses = document.getElementById("playerLosses");
        playerLosses.innerText = playerLossesScore;
        let playerDraws = document.getElementById("playerDraws");
        playerDraws.innerText = playerDrawsScore;
        let computerWins = document.getElementById("computerWins");
        computerWins.innerText = computerWinsScore;
        let computerLosses = document.getElementById("computerLosses");
        computerLosses.innerText = computerLossesScore;
        let computerDraws = document.getElementById("computerDraws");
        computerDraws.innerText = computerDrawsScore; 
        let overallWinner = document.getElementById("overallWinner");
        getWinner();
        overallWinner.innerText = overallResult;
    }
    
// Choose player move, compare and set game winner

function rockClick (){
    playerMove = "rock";
    displayPlayerMove();
    generateComputerMove(i);
    displayComputerMove();
    displayMovesText();
    if (computerMove === "paper") {
        computerWinsGame();
    }
    else if (computerMove === "scissors") {
        playerWinsGame();
    }
    else {
        drawGame();
    }
    updateScoresTable();
}

function paperClick (){
    playerMove = "paper";
    displayPlayerMove();
    generateComputerMove(i);
    displayComputerMove();
    displayMovesText();
    if (computerMove === "scissors") {
        computerWinsGame();
    }
    else if (computerMove === "rock") {
        playerWinsGame();
    }
    else {
        drawGame();
        }
    updateScoresTable();
}

function scissorsClick (){
    playerMove = "scissors";
    displayPlayerMove();
    generateComputerMove(i);
    displayComputerMove();
    displayMovesText();
    if (computerMove === "rock") {
        computerWinsGame();
    }
    else if (computerMove === "paper") {
        playerWinsGame();
    }
    else {
        drawGame();
        }
        updateScoresTable();
    }

// Restart game

function reloadPage(){
    window.location.reload()
}