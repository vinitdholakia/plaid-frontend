import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import Goals from './components/Goals';
import GoalDetails from './components/GoalDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GraphPage from './components/GraphPage';
import LimitPage from './components/LimitPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/goals/:id" render={(props) => <GoalDetails {...props} />} />
          <Route path="/goals" render={(props) => <Goals {...props} />} />
          <Route path="/limits" render={(props) => <LimitPage {...props} />} />
          <Route path="/graph" render={(props) => <GraphPage {...props} />} />
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
