import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/home.js';
import Petitions from './components/petitions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <li className='navlink'> <Link className='navlink-a' to='/'>Home</Link>{" "} </li>
          <li className='navlink'> <Link className='navlink-a' to='/petitions'>Petitions</Link>{" "} </li>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/petitions' component={Petitions} />
        </Switch>
      </div>
    );
  }
}

export default App;
