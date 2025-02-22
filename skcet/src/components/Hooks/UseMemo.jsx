import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
  const [number,setNumber] = useState(0);
  const [counter,setCounter] =useState(0);
  const cubeNum = (num) =>{
    console.log("Calculation done!")
    return Math.pow(num,3)
  }
  const result = useMemo(()=>cubeNum(number),[number])
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <h1>{result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>counter++</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default UseMemo