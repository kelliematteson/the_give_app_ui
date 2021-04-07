import React from 'react';
import { useState } from 'react';
import '../scss/App.scss';
import { Container, Row, Col } from 'react-bootstrap';


import Index from '../components/Index';
import Show from '../components/Show';
import NewGive from '../components/NewGive';




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
            <NewGive />
            </section>
            </Col>
          </Row>

        
    </Container>
    
  );

  
}