import React from 'react';
import Registration from '../components/Registration';
import '../scss/App.scss';
import LogIn from '../components/LogIn';
import { Container, Row, Col, Alert } from 'react-bootstrap';

export default function Login(props) {
    
    return(

       <Container>
           <Alert variant="success">
                <strong>Buy Nothing:</strong> Give Freely. Share Creatively. Post anything you’d like to give away, lend, or share among neighbors. Ask for anything you’d like to receive for free or borrow. Keep it legal. Show your humanity. No buying or selling, no trades or bartering, no soliciting for cash. We’re an adult-only, hyper-local gift economy. We are not a charity or community bulletin board.
                </Alert>
           <Row>
                <Col md={6}>
                    <Registration />
                </Col>
           </Row>
           <hr />
           <Row>
                <Col md={6}>
                    <LogIn />
                </Col>
           </Row>
       </Container>
    )

}

