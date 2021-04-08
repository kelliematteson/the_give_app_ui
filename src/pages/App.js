import React from 'react';
import { useState } from 'react';
import '../scss/App.scss';
import Index from '../components/Index';
import Show from '../components/Show';
import About from './About';
import Home from './Home';
import Login from './Login';
import Splash from './Splash';
import NavBar from '../components/NavBar';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';



export default function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Splash} />
          <div>
        <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </div>
        </Switch>
      
      </Router> 
    </div>
    
  );

  
}

