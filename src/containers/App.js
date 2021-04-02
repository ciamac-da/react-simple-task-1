import React, {Component} from "react"
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
        type="text"
      />
      <p value={this.state.userInput}></p>
    </div>
  );
  }
}

export default App;
