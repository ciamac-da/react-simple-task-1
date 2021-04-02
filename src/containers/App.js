import React, {Component} from "react";
import Validation from "../components/Validation/Validation";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state={userInput:""}
  }


  changed = (event) => {
    this.setState({userInput: event.target.value})
  }
  
  render(){
    return (
      <div className="App">
      <input
        onChange={this.changed}
        value={this.state.userInput}
        type="text"

      />
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length} />
    </div>
  );
  }
}

export default App;
