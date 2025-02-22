import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
 useEffect(()=>{
    count.current++;
    console.log(count.current);
 },[value])
    
  
  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increace</button>
      <h2>Count : {count.current}</h2>
    </div>
  );
};

export default UseRef;
