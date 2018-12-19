import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        React app
          <div className="App-nav">
                <a href="#home" className="App-nav-link">Home</a>
                <a href="#portfolio" className="App-nav-link active">Portfolio</a>
                <a href="#contacts" className="App-nav-link">Contacts</a>
          </div>
      </div>
    );
  }
}

export default App;
