import React from "react";
import { useState } from 'react'
import Square from '../Square'

export default function Board({gameBoard}) {
  
return (
      <div>
        {gameBoard.map((item, index) => {
          return <Square value={item}/>
        })}
        
      </div>
  );
}

  

// - Board
//             - props
//                 - whosturn
//             - State
//                 -values => [null, null, null, ...]
//             - behaviour
//                 - function chooseSquare(index)
//             - Render
//                 - Squares in a 3x3 grid