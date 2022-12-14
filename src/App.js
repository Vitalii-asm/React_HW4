import logo from './logo.svg';
import './App.css';
// import { Clock } from Clock.js
// import { Clock } from './components/Clock';
import { FclickCounter } from '.components/FclickCounter';
import { List } from '.components/List';
import React from 'react';

class App extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = {
      numbers: [10, 15, 20, 25]
    }
  }
  return() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
  
          <FclickCounter />
          
          <List items={this.state.numbers}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  
  
}

export default App;


