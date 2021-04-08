import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';



function Client(){
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const res = await fetch(`https://fast-reef-81026.herokuapp.com/clients/1`)
            const data = await res.json();
            console.log(data)
          } catch (err) {
            console.error(err)
          }
        }
        makeAPICall()
      }, [])


    return (
        <Container fluid={true}>
            {clients.map((client, id) => {
                            return (
                              <p>{client.username}</p>
                                    )
                        })}
        </Container>
    )

}

export default Client;