import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import classes from './loginForm.css';
import LogIn from './LoginForm/LogIn';
import RegisterForm from './RegisterForm/RegisterForm';
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
                    <>
                        <LogIn
                            newUserInfo={this.state.newUserInfo}
                            loadInformation={this.loadInformation}
                            logOn={this.logOn}
                        />
                        <h1>{this.props.tempUserEmail}</h1>
                    </>
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
                    <p>{this.props.sessionMessage}</p>
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
            this.props.login();
        } else {
            this.setState({ message: "Debe llenar todos los campos" });
        }

    }

    checkObjectProperties = (newUserInfo) => {
        var valid = true;
        for (var attri in newUserInfo) {
            if (newUserInfo.hasOwnProperty(attri)) {
                if (newUserInfo[attri] === "") {
                    valid = false;
                }
            }
        }
        return valid;
    }



    logOn = () => {
        let newUserInfo = { ...this.state.newUserInfo }
        if (newUserInfo.mail && newUserInfo.password) {
            let userData = {
                email: newUserInfo.mail,
                password: newUserInfo.password
            }
            this.props.onSetLoggedUser(userData);
            this.props.login();
        } else {
            this.setState({ message: "Debe llenar todos los campos" });
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (newUser, successfulFunction) => dispatch(actionCreators.signUp(newUser, successfulFunction)),
        onSetLoggedUser: (userData, successfulFunction) => dispatch(actionCreators.logOn(userData, successfulFunction))
    }
}

const mapStateToProps = (state) => {
    return {
        tempUserEmail: state.sessionStore.loggedUser.userEmail,
        sessionMessage: state.sessionStore.message
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));