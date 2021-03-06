import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Stores from '../stores/Stores';
import Pets from '../pets/Pets';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <main>
            {/*<Switch> === new Switch()*/}
            <Switch> 
              <Route exact path="/" component={Home}/>;
              <Route path="/stores" component={Stores}/>
              <Route path="/pets" component={Pets}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
