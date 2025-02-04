import React from "react";
import Hen from "./components/Hen";
const App = () => {
  const buttonClicked = () => {
    console.log("Hello world");
  };
  return (
    <>
      <Hen name="vikraam" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat
        quisquam beatae autem repellat, at voluptatibus blanditiis nostrum
        mollitia error distinctio commodi deserunt voluptate delectus esse
        eveniet neque sed labore! Corporis cumque unde laborum expedita
        consectetur commodi, distinctio voluptatem reprehenderit sed est odio
        fugit temporibus doloribus sit assumenda nemo magni?
      </p>
      <button onClick={buttonClicked}>submit</button>
    </>
  );
};

export default App;
