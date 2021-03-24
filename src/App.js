import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [gives, setGives] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch('http://localhost:3000/gives')
        const data = await res.json();
        setGives(data.gives);
      } catch (err) {
        console.error(err)
      }
    }
    makeAPICall()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's see some data!</h3>
      </header>
      <div className="gives">
        <ul>
          {gives.map((give, id) => {
            return (
              <div className="give-card-image">

                <div className="give-name">{give.give_name}</div>

              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
