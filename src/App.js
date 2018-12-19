import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <div className="App-nav">
                    <NavLink activeClassName="active" to='/' className="App-nav-link" exact >Home</NavLink>
                    <NavLink activeClassName="active" to='/portfolio' className="App-nav-link">Portfolio</NavLink>
                    <NavLink activeClassName="active" to='/contacts' className="App-nav-link">Contacts</NavLink>
                </div>
                <div className="App-tab-content">
                    <p>Some text</p>
                    <p>Some text</p>
                    <p>Some text</p>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>
        );
    }
}

export default App;
