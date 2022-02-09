import { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../helper";

export default function Game() {
  let boardArray = [null, null, null, null, null, null, null, null, null];

  const [xTurn, setXTurn] = useState(true);
  const [board, setBoard] = useState(boardArray);

  // let num = Math.random();
  // if (num < 0.5) {
  //   setXTurn(true)
  // } else {
  //   setXTurn(false)
  // };

  // const [symbol, setSymbol] = useState(null);

  const winner = calculateWinner(board);
  const currentPlayer = xTurn ? "X" : "O";

  const handleSquareClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);

    setXTurn(!xTurn);
  };

  // function symbol(){
  //   if (setXTurn === true || ){
  //     setSymbol("X")
  //   } else {
  //     setSymbol("O")
  //   }
  // }

  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <Board gameBoard={board} onSelectSquare={handleSquareClick} />
      <div className="info-wrapper">
        <h3>
          {winner ? "Winner: " + winner : "Next Player: " + currentPlayer}
        </h3>
      </div>
    </>
  );
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
