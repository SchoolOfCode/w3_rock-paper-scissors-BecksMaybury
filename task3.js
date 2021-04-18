let computerScore = 0;
let playerScore = 0;
let computerMove = "rock";
let playerMove = prompt ("player move: enter rock, paper, scissors");

function getWinner (computerMove, playerMove) {
    if (computerScore > playerScore) {
        console.log("computer wins");
        return getWinner = -1;
    } else if (playerScore > computerScore) {
        console.log ("player wins");
        return getWinner = 1;
    } else {
        console.log ("draw");
        return getWinner = 0;
    }
}

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
console.log(computerScore);
console.log(playerScore);
        
let result = getWinner (computerMove, playerMove);
console.log (`Computer chose ${computerMove}, player chose ${playerMove}, scores are ${computerScore} v ${playerScore}`);
alert (`You score: ${result}!`);

