import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [count]);
  return (
    <div>
      <h1>I've render {count} times</h1>
    </div>
  );
};

export default UseEffect;
