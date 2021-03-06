import React, { Component } from 'react';

import ExampleBlock from 'client/components/common/ExampleBlock';
import ChangeLanguage from 'client/components/common/ChangeLanguage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit&nbsp;
            <code>src/App.js</code>
            &nbsp;and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ExampleBlock text="some text" />
          <ChangeLanguage />
        </header>
      </div>
    );
  }
}

export default App;
