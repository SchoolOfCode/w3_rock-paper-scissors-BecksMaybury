let computerScore = 0;
let playerScore = 0;
let computerMove;
let playerMove = prompt ("player move: enter rock, paper, scissors");
let computerMovesArray = ["rock", "paper", "scissors"];
let i;

// GENERATING COMPUTER MOVE

function generateComputerMove (i){
    i=Math.floor(Math.random()*3);
    computerMove = computerMovesArray[i];
    return computerMove;
}

generateComputerMove(i);

// CALCULATING MOVES AND RESULTS

if (computerMove === "rock" && playerMove === "scissors") {
    computerScore++;
    playerScore--;
}

if (computerMove === "rock" && playerMove === "paper") {
    playerScore ++;
    computerScore--;
}

if (computerMove === "paper" && playerMove === "scissors") {
    playerScore++;
    computerScore--;
}

if (computerMove === "paper" && playerMove === "rock") {
    computerScore++;
    playerScore--;
}

if (computerMove === "scissors" && playerMove === "paper") {
    computerScore++;
    playerScore--;
}

if (computerMove === "scissors" && playerMove === "rock") {
    playerScore++;
    computerScore--;
}

function getWinner (computerMove, playerMove) {
    if (computerScore > playerScore) {
        return getWinner = -1;
    } else if (playerScore > computerScore) {
        return getWinner = 1;
    } else {
        return getWinner = 0;
    }
}

// CALCULATING RESULT 

let result = getWinner (computerMove, playerMove);
console.log (`Computer chose ${computerMove}, player chose ${playerMove}, scores are ${computerScore} v ${playerScore}`);
alert (`You score: ${result}!`);


