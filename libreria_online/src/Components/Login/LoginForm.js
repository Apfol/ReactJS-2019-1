import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import classes from './loginForm.css';
import LogIn from './LoginForm/LogIn';
import RegisterForm from './RegisterForm/RegisterForm';
import { users, setUsers, setLogged, setTempUser } from '../../Data';
import User from '../../Classes/User';

class LoginForm extends Component {
    // constructor(id, username, name, mail, pass, img, books = []) {
    state = {
        users: users,
        newUserInfo: {
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


                <button onClick={this.saludo}> buena pa</button>
            </div>
        )
    }

    saludo = () => {
        console.log(this.state.users)
    }

    loadInformation = (event, type) => {
        var loadInformation = {
            ...this.state.newUserInfo
        }

        loadInformation[type] = event.target.value;

        this.setState({
            newUserInfo: loadInformation
        });
    }

    submitNewUser = () => {
        var updateUsers = [...this.state.users];
        var newUserInfo = { ...this.state.newUserInfo }
        /* constructor(id, username, name, mail, pass, img, books = []) */
        updateUsers.push(new User(newUserInfo.username, newUserInfo.name, newUserInfo.mail, newUserInfo.password));
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
        console.log(this.state.users);
        var updateUsers = [...this.state.users];
        var newUserInfo = { ...this.state.newUserInfo }
        var username = newUserInfo.username;
        var password = newUserInfo.password;

        var temUser;
        for (var i = 0; i < updateUsers.length; i++) {
            temUser = updateUsers[i];
            console.log(temUser.username + " " + temUser.pass);
            if ((temUser.username === username) && (temUser.pass === password)) {
                setLogged(true);
                setTempUser(temUser);
                alert("Buena pa ese es jaja xd ");
                break;
            }
        }
    }

}

export default LoginForm;