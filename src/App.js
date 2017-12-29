import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import Clock from './Clock';

class App extends Component {
    state = { 
        deadline: 'January 1, 2018',
        newDeadLine: ''
     }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl 
                        className="Deadline-input"
                        placeholder='new date'
                        onChange={event => this.setState({newDeadLine: event.target.value})}
                    />
                    <Button onClick={() => this.setState({deadline: this.state.newDeadLine})}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default App;

