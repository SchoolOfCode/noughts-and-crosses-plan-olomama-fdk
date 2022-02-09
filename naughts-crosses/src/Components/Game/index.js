import { useState, React } from "react";
import Board from "../Board";

export default function Game() {
  let boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [xTurn, setXTurn] = useState
  (true);
  let num = Math.random();
  if (num < 0.5) {
    setXTurn(true)
  } else {
    setXTurn(false)
  };
    const [board, setBoard] = useState(boardArray);
  
  //   function makeAMove(e) {
  //     console.log()
  // } 
  return <Board gameBoard={board}/>
}



  //   const [xGo, setXGo] = useState(true);

/*
Determine 1st player via 50/50 coinflip
heads = player1

assign player 1 to O
assign player 2 to x

When player 1 clicks a button, switch turn to player 2. (Maybe alert/popup to signify turn?)

- if p1 turn === true, set buttonvlick value to O 


*/




// State
// board = [null,null,null,null,null,null,null,null,null] <- "X", "O", or null
// x's turn = true | false
// Behaviour
// make a move
// if the square is not empty, you can't pick it
// if the square is empty, you can pick it - put the player symbol in that square
// check winner
// check if there's matching symbols in rows, columns, or diagonals
// if there is, the game ends and the symbol wins
// if the board is full, the game ends as a draw
// Render
// Board
// Who's turn is it?
// Winner


