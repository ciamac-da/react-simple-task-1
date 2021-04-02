import React, { useState } from "react";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import "./App.css";

const App = () => {
  const [state, setState] = useState("");

  const inputChangedHandler = (event) => {
    return setState(event.target.value);
  };

  const deleteInputCharHandler = (index) => {
    const text = state.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    return setState(updatedText);
  };

  
  const charList = state.split("").map((char, index) => {
    return (
      <Char
        character={char}
        clicked={() => deleteInputCharHandler(index)}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <input
        onChange={inputChangedHandler}
        value={state}
        type="text"
        style={{ textAlign: "center" }}
      />
      <p style={{ fontSize: "24px", fontWeight: "bolder" }}>{state}</p>
      <Validation inputLength={state.length} />
      {charList}
    </div>
  );
};

export default App;
