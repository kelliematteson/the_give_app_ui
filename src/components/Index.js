import { useState, useEffect } from 'react';
import Content from '../components/Content';
import { Card, CardGroup } from 'react-bootstrap';

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
          
            
                  
                        {gives.map((give, id) => {
                            return (
                              <CardGroup>
                                <Card border='success' style={{ width: '18rem' }} className="card" key={id} onClick={() => {props.handleShow(give.id)}}> 
                                        <Card.Header>Freely Given</Card.Header>
                                        <Card.Body>
                                        <Card.Title>{give.give_name}</Card.Title>
                                        <Card.Text>
                                          <p>{give.give_description}</p>
                                          <p>{give.giver}</p>
                                        </Card.Text>
                                        </Card.Body>
                                </Card>
                                </CardGroup> 
                                    )
                        })}
                  
            
          
        </div>
        
    )



}