import React from 'react';
import { useState } from 'react';
import '../styles/App.scss';
import Index from '../components/Index';
import Show from '../components/Show';



export default function Home() {

  const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
    const toggleShowPageHide = () => {
        setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
    };
  
  const [showGive, setShowGive] = useState({});
    const handleShow = async (id) => {
      try {
      const res = await fetch(`http://localhost:3000/gives/${id}`);  
      const data = await res.json();
      setShowGive(data);
      toggleShowPageHide();
      } catch (err) {
        console.error(err)
      }
    }
 
  
  return (
    
    <div className="Home">
      
          <div className="Data-div">
              <div className="Index">
                <Index 
                  handleShow={handleShow}
                />
              </div>
              {showPageHidden.showPageHidden === false ? (
              <div className="Show">
                <Show
                toggleShowPageHide={toggleShowPageHide}
                showGive={showGive}
                />
              </div>
                ) : (
                  ''
                )}
          </div>
    </div>
    
  );

  
}