import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>Countdown to April 28, 2017</div>
        <div>
          <div>14 Days</div>
          <div>30 Hours</div>
          <div>15 Minutes</div>
          <div>20 Seconds</div>
        </div>
        <div>
          <input placeholder="new date"/>
          <button>Submit</button>
        </div>
      </div>
    )
  }
};

export default App;
