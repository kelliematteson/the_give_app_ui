import { useState, useRef } from 'react';



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

    return (
        <div className="show">
            
            <div className="Back-arrow" onClick={props.toggleShowPageHide}>back up to the Gives</div>
                <section className="Show-card">
                    <h3>Name: {props.showGive.give_name}</h3>
                    <img className="Show-image" src={`/images/${props.showGive.give_image}`}></img>
                    <h3>Description: {props.showGive.give_description}</h3>
                    <h3>Giver: {props.showGive.giver}</h3>
                 </section>
                <section className="Update-form">
                    <form onSubmit={handleUpdate}>
                        <input type="text" name="give_name" ref={updateInput} placeholder={showGive.name}/>
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