Computer rock
Player Rock  = draw
Player Scissor = +1 to Computer
Player Paper = +1 to Player

// IF COMPUTER ROCK && PLAYER  SCISSOR -1 TO PLAYER +1 COMPUTER
//IF COMPUTER ROCK && PLAYER  PAPER +1 TO PLAYER -1 COMPUTER
// IF COMPUTER ROCK && PLAYER ROCK DRAW 
//IF COMPUTER SCISSOR && PLAYER ROCK  -1 TO PLAYER +1 COMPUTER
//IF COMPUTER SCISSOR &&PLAYER PAPER +1 TO PLAYER -1 COMPUTER
// IF COMPUTER SCISSOR && PLAYER SCISSOR DRAW
//IF COMPUTER PAPER && PLAYER SCISSOR +1 TO PLAYER -1 COMPUTER
// IF COMPUTER PAPER&& PLAYER ROCK-1 PLAYER +1 COMPUTER
// IF COMPUTER PAPER&& PLAYER PAPER DRAW

if (computer="rock" && player = "scissor") {
    computerScore +1;
}

if (computer="rock" && player = "paper") {
    playerScore +1;
}

if (computer="rock" && player = "rock") {
    ;
}

if (computer="paper" && player = "scissor") {
    playerScore +1;
}

if (computer="paper" && player = "paper") {
    ;
}

if (computer="paper" && player = "rock") {
    computerScore +1;
}

if (computer="scissor" && player = "scissor") {
}

if (computer="scissor" && player = "paper") {
    computerScore +1;
    ;
}

if (computer="scissor" && player = "rock") {
    playerScore +1;
}