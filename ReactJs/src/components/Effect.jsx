import React, {useEffect, useState} from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("useEffect Invoked");
      return console.log("Value updated");
    },[count]);
  
    return (
      <div>
        <h1>Count : {countRef.current}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
      </div>
  )
}

export default Effect