import React from 'react'
import LoginForm from '../LoginForm/LoginForm';
import classes from './Login.css';

export default function Login() {
    return (
        <div className={classes.container} >
            <LoginForm/>
        </div>
    )
}