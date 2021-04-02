import React, { Component } from "react";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteInputCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          clicked={() => this.deleteInputCharHandler(index)}
          key={index}
        />
      );
    });

    return (
      <div className="App">
        <input
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
          type="text"
          style={{ textAlign: "center" }}
        />
        <p style={{ fontSize: "24px", fontWeight: "bolder" }}>
          {this.state.userInput}
        </p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
