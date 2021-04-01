import React from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';


export default function NavBar() {
    const navStyle = {
        color: 'white'
    };
    return(

        <nav className="NavBar">
            <Link to="/">
            <h3>The Give</h3>
            </Link>
            <ul className="nav-List">
                <Link style={navStyle} to="/give">
                <li>Give</li>
                </Link>
                <Link style={navStyle} to="/about">
                <li>About</li>
                </Link>
                <Link style={navStyle} to="/login">
                <li>Login</li>
                </Link>
            </ul>
        </nav>
    )

}