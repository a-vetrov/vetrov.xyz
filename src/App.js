import React, { Component } from 'react';
import { NavLink } from 'react-router-dom' ;
import { Switch, Route } from 'react-router-dom' ;
import './App.css';
import About from './about/About' ;
import Portfolio from './Portfolio' ;
import Contacts from './contacts/Contacts' ;

class App extends Component {

    render() {

        return (
            <div className="App">
                <nav className="App-nav">
                    <NavLink activeClassName="active" to='/' className="App-nav-link" exact >О себе</NavLink>
                    <NavLink activeClassName="active" to='/portfolio' className="App-nav-link">Примеры работ</NavLink>
                    <NavLink activeClassName="active" to='/contacts' className="App-nav-link">Контакты</NavLink>
                </nav>
                <div className="App-tab-content">
                    <Switch>
                        <Route exact path='/' component={About}/>
                        <Route path='/portfolio' component={Portfolio}/>
                        <Route path='/contacts' component={Contacts}/>
                    </Switch>
                </div>
                <div className="App-copyright">© Андрей Ветров 2018</div>
            </div>
        );
    }
}

export default App;
