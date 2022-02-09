import Square from '../Square'

export default function Board({squares, onSelectSquare}) {
  
return (
      <div className="board">
        {squares.map((square, index) => {
          return <Square 
            key={index}
            value={square}
            onClick={()=> onSelectSquare(index)}
          />
        })}
    </div>
  );
}