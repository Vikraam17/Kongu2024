import React, { useReducer } from "react";

const UseReduce = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment": {
        return { count: state.count + 1 };
      }
      case "Decrement": {
        return { count: state.count - 1 };
      }
      case "input":{
        return {count:action.payload}
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <br />
      <br />
      <input value={state.count} onChange={(e)=>dispatch({type:"input",payload:Number(e.target.value)})} type="number"  />
    </div>
  );
};

export default UseReduce;
