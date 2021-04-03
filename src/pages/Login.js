import React from 'react';
import Registration from '../components/Registration';
import '../scss/App.scss';
import LogIn from '../components/LogIn';

export default function Login(props) {
    
    return(

       <div className="login-Page">
           <section className="registration">
            <Registration />
           </section>
           <section className="registration">
            <LogIn />
           </section>
       </div>
    )

}

