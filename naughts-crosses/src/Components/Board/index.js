import Square from '../Square'

export default function Board({gameBoard, onSelectSquare}) {
  
return (
      <div className="board">
        {gameBoard.map((square, index) => {
          return <Square 
            key={index}
            value={square}
            onClick={()=> onSelectSquare(index)}
          />
        })}
    </div>
  );
}