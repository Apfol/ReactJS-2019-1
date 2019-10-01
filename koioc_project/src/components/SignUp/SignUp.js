import React, { Component } from 'react';
import logo1 from '.././../assets/images/koioc_tittle.png';
import logo2 from '.././../assets/images/logoceo.png';
import classes from'./SignUp.css';
import {Link} from 'react-router-dom';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.mail = React.createRef();
        this.password = React.createRef();
        this.address = React.createRef();
        this.city = React.createRef();
        this.zip_code = React.createRef();
        this.phone = React.createRef();
    }


    render(){
        var signUp = () => {
            const newUser = {
                mail: this.mail.current.value,
                password: this.password.current.value,
                name: this.name.current.value,
                address: {
                    address: this.address.current.value,
                    city: this.city.current.value,
                    zip_code: this.zip_code.current.value
                },
                phone: {
                    number: this.phone.current.value,
                    type: "Celular"
                },
                photo: "",
                services:[]
            }
            const help = this.props.users.concat(newUser);
            this.props.signUp(help);
        }

        return(
            <div className={classes.all}>
                {/*console.log(this.data.usrs)*/}
                <div className={classes.border}> 
                    <div className={classes.logo}>
                        <img className={classes.logo1} src={logo1} alt="logo1-app"></img>
                        <img className={classes.logo2} src={logo2} alt="logo2-app"></img>
                    </div>
                    Nombre: <input ref={this.name} type="text"></input>
                    Correo: <input ref={this.mail} type="mail"></input>
                    Contraseña: <input ref={this.password} type="password"></input>
                    Direccion: <input ref={this.address} type="text"></input>
                    Ciudad: <input ref={this.city} type="text"></input>
                    Codigo Postal: <input ref={this.zip_code} type="text"></input>
                    Celular: <input ref={this.phone} type="number"></input>
                    <Link to = "/">
                        <button onClick = {signUp} className={classes.signUp}>Crear nuevo usuario</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default SignUp;