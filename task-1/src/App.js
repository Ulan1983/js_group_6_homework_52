import React, { Component } from 'react';
import './App.css';
import Circle from './components/Circle/Circle'

class App extends Component {
  state = {
    numbers: []
  };

  generateNumbers = () => {
    let numbersArray = [];
    const min = 5;
    const max = 36;
    for (let i = 0; i < 5;) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbersArray.includes(number)) {
        numbersArray.push(number);
      };
    }
    numbersArray.sort((a, b) => a - b);
    this.setState({ numbersArray });
  };

  getTotal() {
    this.state.numbers.map(this.generateNumbers())
  };



  render() {
    return (
      <div className="App" >
        <button onClick={this.generateNumbers}>Show numbers</button>
        <div>{this.getTotal()}</div>
      </div>
    );
  }
}

export default App;
