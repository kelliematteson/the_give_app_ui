import { useState, useRef } from 'react';

export default function Show(props){
    const input = useRef(null);
    const updateInput = useRef(null);
    const [gives, setGives] = useState({});
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
                    give_name: updateInput.current.value
                })
            });
            const data = await res.json();
        
            setGives({...gives, data : id});

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
                <section className="form-style-2">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="give_name" ref={input} placeholder="Item Name"/>
                        <input className="Give-button" type="submit" value="Give"/>
                    </form>
                </section>
                <section className="form-style-2">
                    <form onSubmit={handleUpdate}>
                        <input type="text" name="give_name" ref={updateInput} defaultValue={showGive.name}/>   
                        <input type="submit" value="Update Give" />  
                    </form>
                    <button onClick={handleDelete}>Delete</button>
                </section>
        </div>

    )






}