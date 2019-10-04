import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage';
import Goals from './components/Goals';
import {BrowserRouter as Router , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <div>
          <Route path="/goals" render={(props) => <Goals {...props} />} />
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
