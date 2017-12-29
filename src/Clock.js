import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    state = { 
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    leading0(number) {
        return number < 10 ? ('0' + number) : number; 
    }
    
    render() {
        return (
            
        );
    }
}

export default Clock;