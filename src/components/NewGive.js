import { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function NewGive(props) {
    const [gives, setGives] = useState([]);
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
            const response = await fetch(`http://localhost:3000/gives`, {
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
            setGives([...gives, data.gife])
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
            <div className="Give-page">
                <h2>Give Component</h2>
                
                <h3>New form goes here</h3>
                <section className="form-style-2">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="give_name" ref={input} placeholder="Item Name"/>
                        <input type="text" name="give_description" ref={inputDescription} placeholder="Item Description"/>
                        <input type="text" name="give_image" ref={inputImage} placeholder="Item Image"/>
                        <input type="text" name="giver" ref={inputGiver} placeholder="Giver"/>
                        <Button className="Give-button" type="submit" value="Give">GIVE</Button>
                    </form>
                </section>
            </div>
        )

}