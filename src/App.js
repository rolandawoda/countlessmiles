import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './sass/main.scss';

class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>      
      </Switch>
      </Router>

      
    );
  }
}

export default App;
