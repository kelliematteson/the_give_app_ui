import React, { Component } from 'react';
import axios from 'axios';
import { Button, FormControl } from 'react-bootstrap';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            registrationErrors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        const {
            username,
            password
        } = this.state;

        axios.post("http://localhost:3000/clients", {
            client: {
                username: username,
                password: password
            }
        } 
        // { withCredentials: true }
        ).then(response => {
            console.log("registration res", response);
            alert('You are now registered to GIVE!');
        })
        .catch(error => {
            console.log("registration error", error)
        });
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="username" 
                placeholder="Name" 
                value={this.state.username} 
                onChange={this.handleChange} 
                required 
                />
                <input 
                type="text" 
                name="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required 
                />
                <Button type="submit">Register</Button>

                </form>  
        </div>);
    }



}