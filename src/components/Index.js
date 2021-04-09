import { useState, useEffect } from 'react';
import Content from '../components/Content';
import { Card, CardGroup, Container } from 'react-bootstrap';

export default function Index(props) {

    const [gives, setGives] = useState([]);
    const [clients, setClients] = useState([]);
    
    //to display ALL the gives on the index
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const res = await fetch('https://fast-reef-81026.herokuapp.com/gives')
            const data = await res.json();
            setGives(data.gives);
          } catch (err) {
            console.error(err)
          }
        }
        makeAPICall()
      }, [])
      useEffect(() => {
        const makeclientAPICall = async () => {
          try {
            const res = await fetch('https://fast-reef-81026.herokuapp.com/clients')
            const data = await res.json();
            console.log(data);
          } catch (err) {
            console.error(err)
          }
        }
        makeclientAPICall()
      }, [])
      //to submit the form to POST to db
        // const user = rememberMe ? localStorage.getItem('user') : '';
        // this.setState({ user, rememberMe });
      
    return (
        <div className="Index-container">
          <Container>
            <h2>Hello, {localStorage.getItem('client.username')}!</h2>
          </Container>
                  
                        {gives.map((give, id) => {
                            return (
                              <CardGroup>
                                <Card border='success' style={{ width: '18rem' }} className="card" key={id} onClick={() => {props.handleShow(give.id)}}> 
                                        <Card.Header>Freely Given</Card.Header>
                                        <Card.Body>
                                        <Card.Title>{give.give_name}</Card.Title>
                                        <Card.Text>
                                          <p>{give.give_description}</p>
                                          <p>{give.client_id}</p>
                                        </Card.Text>
                                        </Card.Body>
                                </Card>
                                </CardGroup> 
                                    )
                        })}
                        {/* <Container>
                        {clients.map((client, id) => {
                          return (
                            <li>{client.username}</li>
                          )
                        })}
                        </Container> */}
                  
            
          
        </div>
        
    )



}