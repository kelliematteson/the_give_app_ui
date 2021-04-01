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

  // const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
  //   const toggleShowPageHide = () => {
  //       setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
  //   };
  
  // const [showGive, setShowGive] = useState({});
  //   const handleShow = async (id) => {
  //     try {
  //     const res = await fetch(`http://localhost:3000/gives/${id}`);  
  //     const data = await res.json();
  //     setShowGive(data);
  //     toggleShowPageHide();
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
 
  
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

