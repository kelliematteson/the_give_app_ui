import React from 'react';
import '../scss/App.scss';
import { Link } from 'react-router-dom';


export default function NavBar() {
    const navStyle = {
        color: 'white'
    };
    return(

        <nav className="NavBar">
            <Link className="logo" to="/">
            <h3>The Give</h3>
            </Link>
            <ul className="nav-List">
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