import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'April 28, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
        <div className="App">
          <div className="App-title">Countdown to {this.state.deadline}</div>
          <Clock deadline={this.state.deadline}/>
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder="new date"
              onChange={event => this.setState({newDeadline: event.target.value})}/>
            <Button onClick={() => this.changeDeadline()} className="btn btn-success">Submit</Button>
          </Form>
      </div>
    )
  }
};

export default App;
