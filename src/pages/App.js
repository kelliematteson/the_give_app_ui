import React from 'react';
import { useState } from 'react';
import '../styles/App.scss';
import Index from '../components/Index';
import Show from '../components/Show';
import Give from './Give';
import About from './About';
import Home from './Home';
import NavBar from '../components/NavBar';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default function App() {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/give" component={Give} />
            <Route path="/about" component={About} />
          </Switch>
      </div>
    </Router> 
  );

  
}

