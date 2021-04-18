## Zero out scoreboard
* set gamesPlayed to 0
* set playerGameScore to 0
* set playerWinsScore to 0
* set playerLossesScore to 0
* set playerDrawsScore to 0
* set playerTotalScore to 0
* set computerGameScore to 0
* set computerWinsScore to 0
* set computerLossesScore to 0
* set computerDrawsScore to 0
* set computerGamesWonScore to 0

# START GAME

## Ask if they are ready to play
* yes - go to get username
* no - go back to home screen

## Get username
* ask user to input name (give validation message)
* check is valid (<= 10 characters, only starting with letters>)
* store username
* display username (use initial capital)

## Display scoreboard

* display playerWinsScore
* display playerLossesScore
* display playerDrawsScore
* display playerGamesScore
* display playerTotalScore
* display computerWinsScore
* display computerLossesScore
* display computerDrawsScore
* display computerGameScore
* display computerTotalScore

## Get user to start game
* press button to start

# PLAY GAME

## Player to choose move
* player to choose rock, paper or scissors
* store choice

## Computer move
* generate move
* store move

## Compare moves
### IF COMPUTER ROCK && PLAYER  SCISSOR -1 TO PLAYER +1 COMPUTER
* playerGameScore -1
* computerGameScore +1
* playerLossesScore +1
* computerWinsScore +1
* display computer wins (message)
### IF COMPUTER ROCK && PLAYER  PAPER +1 TO PLAYER -1 COMPUTER
* playerGameScore +1
* computerGameScore -1
* playerWinsScore +1
* computerLossesScore +1
* display player wins (message)
### IF COMPUTER ROCK && PLAYER ROCK DRAW 
* playerDrawsScore +1
* computerDrawsScore +1
* display draw (message)
### IF COMPUTER SCISSOR && PLAYER ROCK  -1 TO PLAYER +1 COMPUTER
* playerGameScore -1
* computerGameScore +1
* playerLossesScore +1
* computerWinsScore +1
* display computer wins (message)
### IF COMPUTER SCISSOR &&PLAYER PAPER +1 TO PLAYER -1 COMPUTER
* playerGameScore +1
* computerGameScore -1
* playerWinsScore +1
* computerLossesScore +1
* display player wins (message)
### IF COMPUTER SCISSOR && PLAYER SCISSOR DRAW
* playerDrawsScore +1
* computerDrawsScore +1
* display draw (message)
### IF COMPUTER PAPER && PLAYER SCISSOR +1 TO PLAYER -1 COMPUTER
* playerGameScore +1
* computerGameScore -1
* playerWinsScore +1
* computerLossesScore +1
* display player wins (message)
### IF COMPUTER PAPER&& PLAYER ROCK-1 PLAYER +1 COMPUTER
* playerGameScore -1
* computerGameScore +1
* playerLossesScore +1
* computerWinsScore +1
* display computer wins (message)
### IF COMPUTER PAPER&& PLAYER PAPER DRAW
* playerDrawsScore +1
* computerDrawsScore +1
* display draw (message)

## Display game result
* if playerGameScore > 2 
- show player has won
- set playerGameScore + 1
* if computerGameScore > 2 
- show computer has won
- set computerGameScore + 1


## Display scoreboard
* 

## Check if player wants to continue
* if yes, repeat steps [42 - 112]
* if no, display scoreBoard 
* exit


