// Player Turn
//             - props
//                 - whosturn
//             -render
//                  - {whosTurn}

import React, { useState} from 'react';


export default function playerMove() {
    const [symbol, setSymbol] = useState(null);

    function symbol (){
        if(coinFlip === head){
            setSymbol(X)
        }
    }
  return (
    <div>PlayerMove</div>
  )
}
