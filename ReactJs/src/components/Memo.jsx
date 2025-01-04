import { useState, useMemo } from "react";
// import "./Memo.css";

const SlowFunction = (number) => {
  let result = number;
  for (let i = 0; i < 10000000; i++) {
    result = number * 2;
  }
  return result;
};

const Memo = () => {
  const [theme, setTheme] = useState(true);
  const [num, setNum] = useState(0);

  const doubleNumber = useMemo(() => 
    SlowFunction(num), [num]);

  const themeStyles = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  return (
    <div className="container">
      <section> This is a useMemo Example</section>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onMouseOver={() => setTheme((theme) => !theme)}>
        Toggle Theme
      </button>

      <h1 onMouseOver={() => setTheme((theme) => !theme)} style={themeStyles}>{doubleNumber}</h1>
    </div>
  );
};

export default Memo;
