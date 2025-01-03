import React, { useRef, useEffect, useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Enter the text");
  let countRef = useRef(0);

  let increment = () => {
    setCount(count + 1);
    countRef.current++;
    // console.log("Count : ", count);
    console.log("Ref : ",countRef.current);
  };
  let decrement = () =>{
    setCount(count-1)
    countRef.current--;
    console.log("Ref : ",countRef.current);
  }
  return (
    <div>
      <h1>Count : {countRef.current}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <br />
      <input type="text" onChange={(t)=>setText(t.target.value)} />
      <h1>Text: {text}</h1>
    </div>
  );
};

export default StateHook;
