import React, { Component } from 'react';
import logo1 from '.././../assets/images/koioc_tittle.png';
import logo2 from '.././../assets/images/logoceo.png';
import image from '.././../assets/images/image.png';
import profile from '.././../assets/images/profile.png';
import classes from'./SignUp.css';
import {notify} from 'react-notify-toast';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';

class SignUp extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            newUserInfo: {
                mail: "",
                password: "",
                name: "",
                address: "",
                city: "",
                zip_code: "",
                phone: "",
                fileURL: profile,
                file: null
            },
            isUserLoggedIn: this.props.isUserLoggedIn,
        }
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    updateNewUserData = (event, type) => {
        var updatedNewUserInfo = {
          ...this.state.newUserInfo
        }

        if (type === "fileURL") {
            updatedNewUserInfo[type] = URL.createObjectURL(event.target.files[0]); 
            updatedNewUserInfo["file"] = event.target.files[0];    
        }else{
            updatedNewUserInfo[type] = event.target.value;
        }

        this.setState({
            newUserInfo: updatedNewUserInfo
        });
    }


    signUp = () => {
        const newUser = {
            mail: this.state.newUserInfo.mail,
            password: this.state.newUserInfo.password,
            name: this.state.newUserInfo.name,
            address: {
                address: this.state.newUserInfo.address,
                city: this.state.newUserInfo.city,
                zip_code: this.state.newUserInfo.zip_code
            },
            phone: {
                number: this.state.newUserInfo.phone,
                type: "Celular"
            },
            photo: this.state.newUserInfo.file,
        }
        this.props.onUserSignUp(newUser,() => {
            this.props.history.push('/home');
        });
    }

    componentWillReceiveProps = (nextProps) =>{
        this.setState({
            isUserLoggedIn: nextProps.isUserLoggedIn
        });
        if (nextProps.error !== '') {
            //ToastsStore.error('Ups, there was an error: ' + );
            notify.show(nextProps.error, "error", 5000);
            nextProps.onSaveError();
        }
    }

    render(){
        return(
            <div className={classes.all}>
                <div className={classes.border}> 
                    <div className={classes.logo}>
                        <img className={classes.logo1} src={logo1} alt="logo1-app"></img>
                        <img className={classes.logo2} src={logo2} alt="logo2-app"></img>
                    </div>
                        <input placeholder="Name:" onChange={(event) => this.updateNewUserData(event, "name")}  type="text"></input>
                        <input placeholder="E-mail:" onChange={(event) => this.updateNewUserData(event, "mail")}  type="mail"></input>
                        <input placeholder="Password:" onChange={(event) => this.updateNewUserData(event, "password")} type="password"></input>
                        <input placeholder="Address:" onChange={(event) => this.updateNewUserData(event, "address")}  type="text"></input>
                        <input placeholder="City:" onChange={(event) => this.updateNewUserData(event, "city")}  type="text"></input>
                        <input placeholder="Zip code:" onChange={(event) => this.updateNewUserData(event, "zip_code")} type="text"></input>
                        <input placeholder="Phone:" onChange={(event) => this.updateNewUserData(event, "phone")} type="text"></input>                        
                        <input placeholder="Imagen:" className={classes.inputFile} name="file" id="file" onChange={(event) => this.updateNewUserData(event, "fileURL")}  type="file"></input>
                        <label htmlFor="file" className={classes.inputFileLabel} >
                            <img src={image} alt="logo1-app"></img>
                            <p>Choose a profile picture</p></label>
                        {this.renderButton()}
                        
                </div>
                <ProfilePreview data ={this.state.newUserInfo} />
                
            </div>
        )
    }

    renderButton() {
        let button = <button onClick = {this.signUp} className={classes.signUp}>Sign up</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error,
        loadingAuth: state.authenticationStore.loadingAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (newUserData,onSuccessCallback) => dispatch(
            actionCreators.signUp(newUserData,onSuccessCallback)
        ),
        onSaveError: () => dispatch(actionCreators.saveError("")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);