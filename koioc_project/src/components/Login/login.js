import React, { Component } from 'react';
import logo1 from '.././../assets/images/koioc_tittle.png';
import logo2 from '.././../assets/images/logoceo.png';
import classes from'./Login.css';
import {Link, withRouter} from 'react-router-dom';

class Login extends Component{

    constructor(props){
        super(props);
        this.mail = React.createRef();
        this.password = React.createRef();
    }


    render(){      
        return(
            <div className={classes.all}>
                <div className={classes.border}> 
                    <div className={classes.logo}>
                        <img className={classes.logo1} src={logo1} alt="logo1-app"></img>
                        <img className={classes.logo2} src={logo2} alt="logo2-app"></img>
                    </div>
                    <input className={classes.user} ref={this.mail} type="text"></input>
                    <input className={classes.password} ref={this.password} type="password"></input>
                    <Link to = {"/home"}>
                        <button onClick = {this.login} className={classes.login}>Iniciar sesión</button>
                    </Link>
                    <p className={classes.forgetPass}>Olvide mi contraseña</p>
                    <div className={classes.loginSep}>
                        <span className={classes.separator}>o</span>
                    </div>
                    <Link to = {"/signUp"}>
                        <button className={classes.signUp}>Registrarse</button>
                    </Link>
                </div>
            </div>
        )
    }

    login = () => {
        if(!this.props.data.isUserActive)
        {
            var valid = false;
            for(var i = 0; i < this.props.data.usrs.length; i++) {
                if((this.props.data.usrs[i].mail === this.mail.current.value) && (this.props.data.usrs[i].password === this.password.current.value)) {
                    valid = true;
                    this.props.updateActiveUser(this.props.data.usrs[i]);
                    break;
                }
            }
            const {history} = this.props;
            if (!valid) {
                history.push('/');
            }else{
                history.push('/home');
            }
        }
        else{
            return true;
        }
    }
}
export default withRouter(Login);