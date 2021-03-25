import { useState, useRef } from 'react';
export default function CreateGive(props) {
    const [gives, setGives] = useState([]);
    const input = useRef(null);
    const handleSubmit = async e => {
        e.preventDefault();
        const value = input.current.value;
        try {
            const response = await fetch('http://localhost:3000/gives', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: value,
                    description: 'really old, like so old you can not even imagine',
                    image: 'just picture shit',
                    giver: 'your college roomate'
                })
            });
            const data = await response.json();
            setGives([props.data.gives,...props.gives]);
            input.current.value = '';

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="give-form">
            <form onSubmit={handleSubmit}>
                <label className="label_form">
                    <input type="text" name="name" ref={input} placeholder="Item Name" />
                    {/* <input type="text" name="description"  placeholder="Description" />
                    <input type="text" name="image"  placeholder="Image address" />
                    <input type="text" name="giver"  placeholder="Giver" /> */}
                </label>
                <input className="submit-button" type="submit" value="Give"></input>

            </form>
        </div>
    )



}