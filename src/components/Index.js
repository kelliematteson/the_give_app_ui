import { useState, useEffect } from 'react';


export default function Index(props) {

    const [gives, setGives] = useState([]);
    
    //to display ALL the gives on the index
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
      //to submit the form to POST to db
    
    return (
        <div className="Index-container">
            <h2>This is the Index</h2>
            <div className="gives">
                    <ul>
                        {gives.map((give, id) => {
                            return (
                                <div className="card" key={id} onClick={() => {props.handleShow(give.id)}}> 
                                        <h2>{give.give_name}</h2>
                                </div>
                                    )
                        })}
                    </ul>
            </div>
        </div>
        
    )



}