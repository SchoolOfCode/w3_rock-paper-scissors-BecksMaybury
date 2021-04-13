Zero out scoreboard
* set gamesPlayed to 0
* set player1RoundScore to 0
* set player1WinsScore to 0
* set player1LossesScore to 0
* set player1DrawsScore to 0
* set player1GamesWonScore to 0
* set player2RoundScore to 0
* set player2WinsScore to 0
* set player2LossesScore to 0
* set player2DrawsScore to 0
* set player2GamesWonScore to 0

START GAME

Ask if they are ready to play
* yes - go to get username
* no - go back to home screen

Get username
* ask user to input name (give validation message)
* check is valid (<= 10 characters, only starting with letters>)
* store username
* display username (use initial capital)

Display scoreboard
* display player1RoundScore
* display player1WinsScore
* display player1LossesScore
* display player1DrawsScore
* display player1GamesWonScore
* display player2RoundScore
* display player2WinsScore
* display player2LossesScore
* display player2DrawsScore
* display player2GamesWonScore

Get user to start game
* press button to start


Player1 choose move
* player1 to choose rock, paper or scissors
* store choice

Player2 choose move
* player2 generate move
* store move

Compare moves
IF COMPUTER ROCK && PLAYER  SCISSOR -1 TO PLAYER +1 COMPUTER
* player1RoundScore -1
* player2RoundScore +1
* player1LossesScore +1
* player2WinsScore +1
* display player2 wins (message)
IF COMPUTER ROCK && PLAYER  PAPER +1 TO PLAYER -1 COMPUTER
* player1RoundScore +1
* player2RoundScore -1
* player1WinsScore +1
* player2LossesScore +1
* display player1 wins (message)
IF COMPUTER ROCK && PLAYER ROCK DRAW 
* player1DrawsScore +1
* player2DrawsScore +1
* display draw (message)
IF COMPUTER SCISSOR && PLAYER ROCK  -1 TO PLAYER +1 COMPUTER
* player1RoundScore -1
* player2RoundScore +1
* player1LossesScore +1
* player2WinsScore +1
* display player2 wins (message)
IF COMPUTER SCISSOR &&PLAYER PAPER +1 TO PLAYER -1 COMPUTER
* player1RoundScore +1
* player2RoundScore -1
* player1WinsScore +1
* player2LossesScore +1
* display player1 wins (message)
IF COMPUTER SCISSOR && PLAYER SCISSOR DRAW
* player1DrawsScore +1
* player2DrawsScore +1
* display draw (message)
IF COMPUTER PAPER && PLAYER SCISSOR +1 TO PLAYER -1 COMPUTER
* player1RoundScore +1
* player2RoundScore -1
* player1WinsScore +1
* player2LossesScore +1
* display player1 wins (message)
IF COMPUTER PAPER&& PLAYER ROCK-1 PLAYER +1 COMPUTER
* player1RoundScore -1
* player2RoundScore +1
* player1LossesScore +1
* player2WinsScore +1
* display player2 wins (message)
IF COMPUTER PAPER&& PLAYER PAPER DRAW
* player1DrawsScore +1
* player2DrawsScore +1
* display draw (message)

Repeat x 3 = 1 game

Display game result
* if player1RoundScore > 2 
- show player1 has won
- set player1GameScore + 1
* if player2RoundScore > 2 
- show player2 has won
- set player2GameScore + 1


Display scoreboard
* 

Check if Player1 wants to continue
* if yes, repeat steps [42 - 112]
* if no, display scoreBoard 
* exit


