import { useState, React } from "react";

export default function Game() {
  let boardArray = [null, null, null, null, null, null, null, null, null];

  const [board, setBoard] = useState(boardArray);
  //   const [xGo, setXGo] = useState(true);

  return <div>Game</div>;
}

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