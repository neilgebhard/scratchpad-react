import { useState } from "react";
import ScratchPad from "./ScratchPad";
import "./App.css";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const buttonText = isEditing ? "Done" : "Edit";

  return (
    <>
      <header>
        <a class="logo" href="/">
          Scratchpad
        </a>
        <button onClick={clickHandler}>{buttonText}</button>
      </header>
      <ScratchPad isEditing={isEditing} />
    </>
  );
};

export default App;
