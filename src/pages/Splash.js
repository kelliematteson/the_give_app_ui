import React from 'react';
import '../scss/App.scss';
import { Container } from 'react-bootstrap';

export default function Splash() {
    
    return(

       <Container fluid>
            
        <div className='splash-page'> 
    
        <div class='image-container'>
        <a href='/login'><img src="/images/the-give-logo2.gif" /></a>
        </div><br />
        {/* <div class='enter-container'>
            <a href='/home'><h1>Enter!</h1></a>
            
        </div>  */}
        </div>
   
       </Container>
    )

}