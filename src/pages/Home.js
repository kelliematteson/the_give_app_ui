import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '../scss/App.scss';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


import Index from '../components/Index';
import Show from '../components/Show';
import NewGive from '../components/NewGive';
import Client from '../components/Client';




export default function Home() {
  /// trying to set the state here in the HOME PAGE component to pass down to the child components
  const [gives, setGives] = useState([]);
    
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

  const [showPageHidden, setShowPageHidden] = useState({ showPageHidden: true });
    const toggleShowPageHide = () => {
        setShowPageHidden({ showPageHidden: !showPageHidden.showPageHidden });
    };

  
  const [showGive, setShowGive] = useState({});
    const handleShow = async (id) => {
      try {
      const res = await fetch(`https://fast-reef-81026.herokuapp.com/gives/${id}`);  
      const data = await res.json();
      setShowGive(data);
      toggleShowPageHide();
      } catch (err) {
        console.error(err)
      }
    }
    const input = useRef(null);
    const inputImage = useRef(null);
    const inputGiver = useRef(null);
    const inputDescription = useRef(null);
    // console.log(gives);

    const handleSubmit = async (event) => {
    event.preventDefault();
    
    // const value = input.current.value;
        try {
            const response = await fetch('https://fast-reef-81026.herokuapp.com/gives', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    gife: {
                    give_name: input.current.value,
                    give_description: inputDescription.current.value,
                    give_image: inputImage.current.value,
                    client_id: localStorage.getItem('client.id')
                }})
            });
            const data = await response.json();
            setGives([...gives, data])
            // [...gives, data.gife]
            console.log(data);
            // setGives([...gives, data.gives]);
            input.current.value = '';
            inputDescription.current.value = '';
            inputImage.current.value = '';
            inputGiver.current.value = '';

        } catch (error){
            console.error(error);
        } finally {
          window.location.assign('/home');
        }
      }
  
  return (
    
    <Container fluid="md">
      
    
          <Row>
            <Col>
              <section className="Index">
                <Index 
                  handleShow={handleShow}
                />
              </section>
              {showPageHidden.showPageHidden === false ? (
              <section className="Show">
                <Show
                toggleShowPageHide={toggleShowPageHide}
                showGive={showGive}
                />
              </section>
                ) : (
                  ''
                )}
          <section className="NewGive">
                
                <h2>Buy Nothing, Give Freely, Share Creatively</h2>
                
                
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlid="postName">
                            <Form.Control 
                            type="text" 
                            name="give_name" 
                            ref={input} 
                            placeholder="Item Name"
                            />
                            </Form.Group>
                            <Form.Group controlid="postDescription">
                            <Form.Control 
                            type="text" 
                            name="give_description" 
                            ref={inputDescription} 
                            placeholder="Description"
                            />
                            </Form.Group>
                            <Form.Group controlid="postImage">
                            <Form.Control 
                            type="text" 
                            name="give_image" 
                            ref={inputImage} 
                            placeholder="Image Link"
                            />
                             </Form.Group>
                            {/* <Form.Group controlid="postGiver">
                            <Form.Control 
                            type="text" 
                            name="giver" 
                            ref={inputGiver} 
                            placeholder="Your Name"
                            />
                            </Form.Group> */} 
                        <Button variant="success" type="submit" value="Give">GIVE</Button>
                    </Form>
            
            </section>
            <section className="Client">
            <Client />
            </section>
            </Col>
          </Row>

        
    </Container>
    
  );

  
}