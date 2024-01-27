// You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:

// 2xi if the player hit 10 pins in any of the previous two turns.
// Otherwise, It is xi.
// The score of the player is the sum of the values of their n turns.

// Return

// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.

var isWinner = function(player1, player2) {
  let player1Sum=player1[0], player2Sum=player2[0];
  let player1Pin = player1[0] === 10 ? 2 : 0;
  let player2Pin = player2[0] === 10 ? 2 : 0;

  let i = 1;
  while(i < player1.length) {
  
    if(player1Pin) {
      player1Sum += 2*player1[i];
      player1Pin--;
    } else {
      player1Sum += player1[i]
    }

    if(player2Pin) {
      player2Sum += 2*player2[i];
      player2Pin--;
    } else {
      player2Sum += player2[i];
    }
    if(player1[i] === 10) player1Pin = 2;
    if(player2[i] === 10) player2Pin = 2;
    i++;
  }

  if(player1Sum === player2Sum) return 0;
  return player1Sum > player2Sum ? 1 : 2
}

console.log('winner is', isWinner([9,7,10,7], [10,2,4,10]))