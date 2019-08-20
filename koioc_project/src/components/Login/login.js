import React, { Component } from 'react';
import logo1 from '.././../assets/images/koioc_tittle.png';
import logo2 from '.././../assets/images/logoceo.png';
import './login.css';
import {Link} from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <div className="all">
                <div className="border"> 
                    <div className="logo">
                       <img className="logo1" src={logo1} alt="logo1-app"></img>
                       <img className="logo2" src={logo2} alt="logo2-app"></img>
                    </div>
                    <input className="user" type="text"></input>
                    <input className="password" type="password"></input>
                    <Link style={{textDecoration:'none'}} to="/home">
                        <button className="login">Iniciar sesión</button>
                    </Link>
                    <p className="forgetPass">Olvide mi contraseña</p>
                    <div className="loginSep">
                        <span className="separator">o</span>
                    </div>
                    <button className="singUp">Registrarse</button>
                </div>
            </div>
        )
    }
}
export default Login;