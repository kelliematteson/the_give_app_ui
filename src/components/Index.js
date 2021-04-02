import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';


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
            <h2>Freely Given</h2>
            <div className="gives">
                    <ul>
                        {gives.map((give, id) => {
                            return (
                                <Card key={id} onClick={() => {props.handleShow(give.id)}}> 
                                        <Card.Img variant="top" src="/public/images/beigeCouch.jpg/100px180" />
                                        <Card.Body>
                                        <Card.Text>{give.give_name}</Card.Text>
                                        </Card.Body>
                                </Card>
                                    )
                        })}
                    </ul>
            </div>
        </div>
        
    )



}