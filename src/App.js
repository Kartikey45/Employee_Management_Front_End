import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import UserActions from './Components/UserActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          
          <Route path="/UserActions" component={UserActions} />
        </Router>
      </div>
    );
  }
}

export default App;
