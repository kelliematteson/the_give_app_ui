import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

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

        axios.post("https://fast-reef-81026.herokuapp.com/clients", {
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

            <Form  onSubmit={this.handleSubmit}>
                <Form.Group controlid="registerUserNameForm">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                type="text" 
                name="username" 
                placeholder="Name" 
                value={this.state.username} 
                onChange={this.handleChange} 
                required 
                />
                <Form.Text className="text-muted">Pick a name you will remember!</Form.Text>
                </Form.Group>
                <Form.Group controlid="registerPassWordForm">
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
                <Button variant="outline-success" type="submit">Register</Button>

                </Form>  
        </div>);
    }



}