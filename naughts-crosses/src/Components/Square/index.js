import React from "react";

export default function Square({value, index}) {
  function handleClick(e) {
    console.log({value})
  }
  return (<button onClick={handleClick}>{value}</button>);
}

