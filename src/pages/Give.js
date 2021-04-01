import { useState, useRef } from 'react';

export default function Give() {
    const [gives, setGives] = useState({});
    const input = useRef(null);
    const inputImage = useRef(null);
    const inputGiver = useRef(null);
    const inputDescription = useRef(null);

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
        return (
            <div className="Give-page">
                <h2>Give Page</h2>
                <h3>New form goes here</h3>
                <section className="form-style-2">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="give_name" ref={input} placeholder="Item Name"/>
                        <input type="text" name="give_description" ref={inputDescription} placeholder="Item Description"/>
                        <input type="text" name="give_image" ref={inputImage} placeholder="Item Image"/>
                        <input type="text" name="giver" ref={inputGiver} placeholder="Giver"/>
                        <input className="Give-button" type="submit" value="Give"/>
                    </form>
                </section>
            </div>
        )

}