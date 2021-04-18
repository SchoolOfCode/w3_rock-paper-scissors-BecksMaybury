let computerScore = 0;
let playerScore = 0;
let computer;
let player;
 
function getWinner (computer, player) {
    
        if (computer === "rock" && player === "scissors") {
        computerScore++;
        playerScore--;
    }

    if (computer === "rock" && player === "paper") {
        playerScore ++;
        computerScore--;
    }

    if (computer === "paper" && player === "scissors") {
        playerScore++;
        computerScore--;
    }

    if (computer === "paper" && player === "rock") {
        computerScore++;
        playerScore--;
    }

    if (computer === "scissors" && player === "paper") {
        computerScore++;
        playerScore--;
    }

    if (computer === "scissors" && player === "rock") {
        playerScore++;
        computerScore--;
    }
    console.log(computerScore);
    console.log(playerScore);
    
    {console.log }
    console.log (`computer chose ${computer}, player chose ${player}, scores are ${computerScore} v ${playerScore}`);

    if (computerScore > playerScore) {
        return getWinner = -1;
    } else if (playerScore > computerScore) {
        return getWinner = 1;
    } else {
        return getWinner = 0;
    }
}

let result = getWinner ("rock", "rock");
console.log (`Player Score: ${result}`);