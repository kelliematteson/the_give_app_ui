import { useState, useRef } from 'react';

export default function Show(props){
    const input = useRef(null);
    const inputImage = useRef(null);
    const inputGiver = useRef(null);
    const updateInput = useRef(null);
    const updateDescription = useRef(null);
    const updateImage = useRef(null);
    const updateGiver = useRef(null);
    const inputDescription = useRef(null);
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
                        give_description: inputDescription.current.value,
                        give_image: inputImage.current.value,
                        giver: inputGiver.current.value,
                        user_id: 2
                    })
                });
                const data = await response.json();
                setGives([...gives, data.gife]);
                input.current.value = '';
                inputDescription.current.value = '';
                inputImage.current.value = '';
                inputGiver.current.value = '';

            } catch (error){
                console.error(error);
            }
    };
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

        } catch (error){
            console.error(error);
        }
    };

    return (
        <div className="Show-container">
            <div className="Back-arrow" onClick={props.toggleShowPageHide}>back</div>
                <section className="Show-card">
                    <h3>Name: {props.showGive.give_name}</h3>
                    <img src={props.showGive.give_image}></img>
                    <h3>Description: {props.showGive.give_description}</h3>
                    <h3>Giver: {props.showGive.giver}</h3>
                 </section>
                <section className="form-style-2">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="give_name" ref={input} placeholder="Item Name"/>
                        <input type="text" name="give_description" ref={inputDescription} placeholder="Item Description"/>
                        <input type="text" name="give_image" ref={inputImage} placeholder="Item Image"/>
                        <input type="text" name="giver" ref={inputGiver} placeholder="Giver"/>
                        <input className="Give-button" type="submit" value="Give"/>
                    </form>
                </section>
                <section className="Update-form">
                    <form onSubmit={handleUpdate}>
                        <input type="text" name="give_name" ref={updateInput} defaultValue={showGive.name}/>
                        <input type="text" name="give_description" ref={updateDescription} defaultValue={showGive.description}/>
                        <input type="text" name="give_image" ref={updateImage} defaultValue={showGive.image}/>
                        <input type="text" name="giver" ref={updateGiver} defaultValue={showGive.giver}/>         
                        <input type="submit" value="Update Give" />  
                    </form>
                    <button onClick={handleDelete}>Delete</button>
                </section>
        </div>

    )






}