import { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FormControl, Form, FormGroup } from 'react-bootstrap';



export default function NewGive(props) {
    const [gives, setGives] = useState({});
    // useEffect(() => {
    //     const makeAPICall = async () => {
    //       try {
    //         const res = await fetch('http://localhost:3000/gives')
    //         const data = await res.json();
    //         setGives(data.gives);
    //       } catch (err) {
    //         console.error(err)
    //       }
    //     }
    //     makeAPICall()
    //   }, [])
    // const [gives, setGives] = useState({});
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
                    giver: inputGiver.current.value,
                    client_id: 2
                }})
            });
            const data = await response.json();
            setGives(...gives, data.gife)
            // [...gives, data.gife]
            console.log(data);
            // setGives([...gives, data.gives]);
            input.current.value = '';
            inputDescription.current.value = '';
            inputImage.current.value = '';
            inputGiver.current.value = '';

        } catch (error){
            console.error(error);
        }
};
        return (
            <div className="NewGive">
                
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
                            <Form.Group controlid="postGiver">
                            <Form.Control 
                            type="text" 
                            name="giver" 
                            ref={inputGiver} 
                            placeholder="Your Name"
                            />
                            </Form.Group>
                        <Button variant="success" type="submit" value="Give">GIVE</Button>
                    </Form>
                
                
            </div>
        )

}