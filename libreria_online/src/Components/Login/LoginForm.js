import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import classes from './loginForm.css';
import LogIn from './LoginForm/LogIn';
import RegisterForm from './RegisterForm/RegisterForm';
import { users, setTempUser, setEntered } from '../../Data';
import User from '../../Classes/User';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/loginActionGenerator';

class LoginForm extends Component {
    // constructor(id, username, name, mail, pass, img, books = []) {
    state = {
        newUserInfo: {
            img: "", name: "", username: "", mail: "", password: ""
        },
        message: ""
    }


    render() {
        return (
            <div className={classes.login_form}>
                <header>
                    <nav className="nav-bar">
                        <ul>
                            <li><Link to="/session/sign-in">Acceder</Link></li>
                            <li><Link to="/session/register">Registro</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/session/sign-in" exact render={() => (
                    <LogIn
                        newUserInfo={this.state.newUserInfo}
                        loadInformation={this.loadInformation}
                        checkUser={this.checkUser}
                    />
                )} />

                <Route path="/session/register" exact render={() => (
                    <RegisterForm
                        newUserInfo={this.state.newUserInfo}
                        loadInformation={this.loadInformation}
                        submitNewUser={this.submitNewUser}
                    />
                )} />

                <section className={classes.message}>
                    <p>{this.state.message}</p>
                </section>
            </div>
        )
    }

    loadInformation = (event, type) => {
        var loadInformation = {
            ...this.state.newUserInfo
        }
        if (type === "img") {
            var file = document.getElementById("img_user").files[0];
            if (file) {
                loadInformation[type] = file.name;
            } else {
                loadInformation[type] = "";
            }

        } else {
            loadInformation[type] = event.target.value;
        }
        this.setState({
            newUserInfo: loadInformation
        });
    }

    submitNewUser = () => {
        var newUserInfo = { ...this.state.newUserInfo }
        let notEmpty = this.checkObjectProperties(newUserInfo);
        let newUser;
        if (notEmpty) {
            newUser = new User(newUserInfo.username, newUserInfo.name, newUserInfo.mail, newUserInfo.password, newUserInfo.img);
            if (!this.searchUser(newUser)) {
                this.props.onAddUser(newUser);
                document.getElementById("img_user").value = "";
                this.setState({
                    newUserInfo: {
                        img: "",
                        name: "",
                        username: "",
                        mail: "",
                        password: ""
                    },
                    message: ""
                });
            } else {
                this.setState({ message: "Ya Hay Una Persona Con El Nombre De Usuario o Contraseña Ingresados" });
            }
        } else {
            this.setState({ message: "Debe llenar todos los campos" });
        }

    }

    checkObjectProperties = (newUserInfo) => {
        var valid = true;
        for (var attri in newUserInfo) {
            if (newUserInfo.hasOwnProperty(attri)) {
                if (newUserInfo[attri] === "") {
                    alert("Estoy en blanco :'v");
                    valid = false;
                }
            }
        }
        return valid;
    }

    searchUser = (newUser) => {
        var exists = false;
        console.log(users);
        var stateUsers = [...this.props.users];
        var tempUser;
        for (var i = 0; i < stateUsers.length; i++) {
            tempUser = stateUsers[i];
            if ((tempUser.username === newUser.username) && (tempUser.pass === newUser.pass)) {
                exists = true;
            }
        }
        return exists;
    }

    checkUser = () => {
        let newUserInfo = { ...this.state.newUserInfo }
        var tempUser = new User(newUserInfo.username, newUserInfo.name, newUserInfo.mail, newUserInfo.password, newUserInfo.img);
        if (this.searchUser(tempUser)) {
            setEntered(true);
            setTempUser(tempUser);
            alert("Ingreso Exitoso");
            this.props.login();
            this.props.history.push("/session/sign-in");
        } else {
            alert("El usuario o contraseña es invalido");
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (newUser) => dispatch(actionCreators.addUser(newUser)),
        onSetLoggedUser: (user) => dispatch(actionCreators.setLoggedUser(user))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.sessionStore.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));