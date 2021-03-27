import { useState, useRef } from 'react';

export default function Show(props){
    const input = useRef(null);
    const [gives, setGives] = useState([]);
    const [showGive, setShowGive] = useState({});


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
                        give_name: input.current.value,
                        give_description: 'used but still good',
                        give_image: 'oldmattress.jpg',
                        giver: 'your Mom'
                    })
                });
                const data = await response.json();
                setGives([...gives, data]);
                input.current.value = '';

            } catch (error){
                console.error(error);
            }
    };

    return (
        <div className="Show-container">
            <div className="Back-arrow" onClick={props.toggleShowPageHide}>back</div>
                <section className="Show-card">
                    <h3>{props.showGive.give_name}</h3>
                    <img src={props.showGive.give_image}></img>
                    <h3>{props.showGive.give_description}</h3>
                    <h3>{props.showGive.giver}</h3>
                 </section>
                <section className="Give-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="give_name" ref={input} placeholder="Item Name"/>
                        <input className="Give-button" type="submit" value="Give"/>
                    </form>
                </section>
        </div>

    )






}