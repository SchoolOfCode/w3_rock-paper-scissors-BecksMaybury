let computerScore = 0;
let playerScore = 0;
let computer = "rock";
let player = "paper";
 
        if (computer === "rock" && player === "scissors") {
        computerScore++;
    }

    if (computer === "rock" && player === "paper") {
        playerScore ++;
    }


    if (computer === "paper" && player === "scissors") {
        playerScore++;
    }

    if (computer === "paper" && player === "rock") {
        computerScore++;
    }

    if (computer === "scissors" && player === "paper") {
        computerScore++;
    }

    if (computer === "scissors" && player === "rock") {
        playerScore++;
    }
    console.log(computerScore);
    console.log(playerScore);
    // }

    if (computerScore > playerScore) {
        console.log("computer wins")
    } else if (playerScore > computerScore) {
        console.log ("player wins");
    } else {
        console.log ("draw");
    }
    {console.log }
    console.log (`computer chose ${computer}, player chose ${player}, scores are ${computerScore} v ${playerScore}`);
