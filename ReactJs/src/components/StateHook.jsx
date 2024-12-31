import React, { useRef, useEffect, useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);

  let increment = () => {
    setCount(count + 1);
    countRef.current++;
    // console.log("Count : ", count);
    console.log("Ref : ",countRef.current);
  };

  // useEffect(() => {
  //   console.log("useEffect Invoked");
  //   return console.log("Value updated");
  // },[count]);

  return (
    <div>
      <h1>Count : {countRef.current}</h1>
      <button onClick={increment}>Increment</button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
};

export default StateHook;
