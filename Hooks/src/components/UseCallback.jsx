import React, { useCallback, useState } from "react";
import Header from "./Header";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const newFunction = useCallback(()=>{},[])
  return (
    <div>
      <Header newFunction={newFunction} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
};

export default UseCallback;
