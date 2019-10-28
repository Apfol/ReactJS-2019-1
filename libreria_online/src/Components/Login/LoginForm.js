import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import classes from './loginForm.css';
import LogIn from './LoginForm/LogIn';
import RegisterForm from './RegisterForm/RegisterForm';
import { users, setUsers, setTempUser, setEntered } from '../../Data';
import User from '../../Classes/User';
import { connect } from 'react-redux';

class LoginForm extends Component {
    // constructor(id, username, name, mail, pass, img, books = []) {
    state = {
        users: users,
        newUserInfo: {
            img: "",
            name: "",
            username: "",
            mail: "",
            password: ""
        }
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



            </div>
        )
    }



    loadInformation = (event, type) => {
        var loadInformation = {
            ...this.state.newUserInfo
        }
        if (type === "img") {
            loadInformation[type] = document.getElementById("img_user").files[0].name;
        } else {
            loadInformation[type] = event.target.value;
        }
        this.setState({
            newUserInfo: loadInformation
        });
    }

    submitNewUser = () => {
        var updateUsers = [...users];
        var newUserInfo = { ...this.state.newUserInfo }
        /* constructor(username, name, mail, pass, img, books = []) */
        updateUsers.push(new User(newUserInfo.username, newUserInfo.name, newUserInfo.mail, newUserInfo.password, newUserInfo.img));
        setUsers(updateUsers);
        console.log(users);
        this.setState({
            users: updateUsers,
            newUserInfo: {
                id: "",
                name: "",
                username: "",
                mail: "",
                password: ""
            }
        })
    }

    checkUser = () => {
        console.log(users);
        var updateUsers = [...users];
        var newUserInfo = { ...this.state.newUserInfo }
        var username = newUserInfo.username;
        var password = newUserInfo.password;

        var temUser;
        let valid = false;
        for (var i = 0; i < updateUsers.length; i++) {
            temUser = updateUsers[i];
            if ((temUser.username === username) && (temUser.pass === password)) {
                setEntered(true);
                setTempUser(temUser);
                alert("Ingreso Exitoso");
                valid = true;
                this.props.login();
                this.props.history.push("/session/sign-in");
                break;
            }
        }
        if (!valid) {
            alert("El usuario o contraseña es invalido");
        }
    }

}

export default withRouter(LoginForm);