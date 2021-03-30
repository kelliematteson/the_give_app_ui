import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import Show from './components/Show';

export default function App() {

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
    <div className="App">
          <header className="App-header">
            <h3>The Give</h3>
          </header>
        <div className="Index">
            <Index 
            handleShow={handleShow}
            />
        </div>
        <div className="Page-break"></div>
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
  
  );

  
}

