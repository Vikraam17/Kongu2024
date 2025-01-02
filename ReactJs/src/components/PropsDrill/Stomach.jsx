import { useContext, useState } from "react";
import { nameContext } from "../../App";

function Stomach() {
  const name = useContext(nameContext);
  const [color, setColor] = useState("White");
  const [bgcolor, setBgColor] = useState("Black");
  const ChangeColor = () => {
    setColor(color === "White" ? "Black" : "White");
    setBgColor(bgcolor === "Black" ? "Green" : "Black");
  };
  return (
    <div>
      <h1 style={{ color: color, backgroundColor: bgcolor }}>
        Stomach: {name}
      </h1>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter the color"
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          border: "2px solid red",
          textAlign: "center",
        }}
      />

      <button
        onClick={ChangeColor}
        style={{
          color: "Red",
          backgroundColor: "Aqua",
          padding: "10px",
          cursor: "pointer",
          marginTop: "10px",
          border: "2px purple dashed",
          borderRadius: "5px",
        }}
      >
        Click me to change the color
      </button>
    </div>
  );
}

export default Stomach;
