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

        axios.post("https://fast-reef-81026.herokuapp.com/clients/login", {
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
        console.log(event.target.value)
    }

    render() {
        return (<div>

           
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicUserName">
                <Form.Label>Register</Form.Label>
                <Form.Control 
                type="text" 
                name="username" 
                placeholder="Enter Name" 
                value={this.state.username} 
                onChange={this.handleChange} 
                required 
                />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required 
                />
                </Form.Group>
                <Button variant="outline-success"type="submit">Log In</Button>

                </Form>  
                
        </div>);
    }



}
