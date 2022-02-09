import { useState, React } from "react";
import Board from "../Board";


export default function Game() {
  let boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const [board, setBoard] = useState(boardArray);
  
  //   function makeAMove(e) {
  //     console.log()
  // } 
  return <Board gameBoard={board}/>
}



  //   const [xGo, setXGo] = useState(true);

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
