
export default function Square({value, handleClick}) {
  // function handleClick(e) {
  //   console.log({value})
  // }
  return (
      <button onClick={handleClick}>{value}</button>
  );
}