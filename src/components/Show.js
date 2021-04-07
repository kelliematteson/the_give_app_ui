import { useState, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


export default function Show(props){
    
    const updateInput = useRef(null);
    const updateDescription = useRef(null);
    const updateImage = useRef(null);
    const updateGiver = useRef(null);
    const [gives, setGives] = useState([]);
    const [showGive, setShowGive] = useState({});

    const handleDelete = async (e) => {
        e.preventDefault();
        let id = props.showGive.id;
        console.log(id);
        try {
            const response = await fetch(`http://localhost:3000/gives/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setGives(!data) /// trying to make the index update after change
        } catch (error) {
            console.error(error)
        }
    };
    const handleUpdate = async e => {
        e.preventDefault();
        let id = props.showGive.id;
        try {
            const res = await fetch(`http://localhost:3000/gives/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    give_name: updateInput.current.value,
                    give_description: updateDescription.current.value,
                    give_image: updateInput.current.value,
                    giver: updateGiver.current.value
                })
            });
            const data = await res.json();
            setGives(data);
            console.log(data);

        } catch (error){
            console.error(error);
        }
    };
    const styles = {
        
            paddingTop: "5vh",
            paddingBottom: "5vh"
        
    }

    return (
        <Container style={styles}>
            
            <Button variant="outline-success" onClick={props.toggleShowPageHide}>back</Button>
                <section className="Show-card">
                    <h3>Item: {props.showGive.give_name}</h3>
                    <img className="Show-image" src={`/images/${props.showGive.give_image}`}></img>
                    <p>Description: {props.showGive.give_description}</p>
                    <p>Giver: {props.showGive.giver}</p>
                 </section>

                    <Form onSubmit={handleUpdate}>
                    <Form.Group controlid="updateName">
                            <Form.Control 
                            type="text" 
                            name="give_name" 
                            ref={updateInput}
                            placeholder="update the name"
                            />
                            </Form.Group>
                            <Form.Group controlid="updateDescription">
                            <Form.Control 
                            type="text" 
                            name="give_description" 
                            ref={updateDescription}
                            placeholder="update the description"
                            />
                            </Form.Group>
                            <Form.Group controlid="updateImage">
                            <Form.Control 
                            type="text" 
                            name="give_image" 
                            ref={updateImage}
                            placeholder="update the image"
                            />
                            </Form.Group>
                            <Form.Group controlid="updateGiver">
                            <Form.Control 
                            type="text" 
                            name="giver" 
                            ref={updateGiver}
                            placeholder="update who it's from"
                            />
                            </Form.Group>
                        
                        <Button variant="outline-success" type="submit" value="Update Give">Update</Button> 
                        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
                    </Form>
                    
                
            
                </Container>

    )






}