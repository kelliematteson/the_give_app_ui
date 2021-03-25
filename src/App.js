import React, {useState, useEffect} from 'react';
import './App.css';
import GiveShowPage from './components/GiveShowPage';

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
  ///Toggle the ShowPage here
  const [giveShowPageHidden, setGiveShowPageHidden] = useState({ giveShowPageHidden: true });

  const toggleGiveShowPageHide = () => {
    setGiveShowPageHidden({ giveShowPageHidden: !giveShowPageHidden.giveShowPageHidden });
  }
  //handleGiveShowPage function - fetch request with the give.id
  const [showGive, setShowGive] = useState({});
  const handleGiveShowPage = async (id) => {
    try {
    const res = await fetch(`http://localhost:3000/gives/${id}`);  
    const data = await res.json();
    setShowGive(data);
    toggleGiveShowPageHide();
    } catch (err) {
       console.error(err)
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Let's see some data!</h3>
      </header>
      <div className="gives">
        <ul>
          {gives.map((give, id) => {
            return (
              <div className="give-card-image" key={id} onClick={handleGiveShowPage}>

                <div className="give-name">{give.give_name}</div>

              </div>
            )
          })}
        </ul>
      </div>
      {giveShowPageHidden.giveShowPageHidden === false ? (
          <section id="give-show-page">
            <GiveShowPage 
              toggleGiveShowPageHide={toggleGiveShowPageHide}
              showGive={showGive}
            />
          </section>
				) : (
					''
				)}
    </div>
  );
}

export default App;
