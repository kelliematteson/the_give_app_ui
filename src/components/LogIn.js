import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        const {
            username,
            password
        } = this.state;

        axios.post("http://localhost:3000/clients/login", {
            client: {
                username: username,
                password: password
            }
        } 
        // { withCredentials: true }
        ).then(response => {
            console.log("res from login", response);
            

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
        return (<div classname="login">
            <Form onSubmit={this.handleSubmit}>
                <h3>Log In Form</h3>
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
                <Button variant="primary"type="submit">Log In</Button>

                </Form>  
        </div>);
    }



}
