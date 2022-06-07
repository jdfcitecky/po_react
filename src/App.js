import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Test</p>
        </header>
      </div>
    )
  }
}

