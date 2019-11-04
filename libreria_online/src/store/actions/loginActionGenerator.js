import * as actionTypes from './actions';
import axios from '../../axios/axios-session';

const API_KEY = "AIzaSyDhDbB3Bb43TJ-_uj5PafUnfZuOQpkXaN8";


export const logOn = (userData, successFunction) => {
    return dispatch => {
        axios.post('/accounts:signInWithPassword?key=' + API_KEY, userData)
            .then(response => {
                const userEmail = userData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                console.log(response);

                saveLocalUser(userEmail, token, localId);
                dispatch(saveSession(userEmail, token, localId));

                alert('Se logeo exitosamente');
                if (successFunction) {
                    successFunction();
                }

            }).catch(error => {
                dispatch(throwError(error.response.data.error.message))
            });
    }
}

export const signUp = (user, successFunction) => {
    let userData = {
        email: user.mail,
        password: user.pass
    };
    return dispatch => {
        axios.post("/accounts:signUp?key=" + API_KEY, userData)
            .then(response => {
                let userEmail = userData.email;
                let token = response.data.idToken;
                let localId = response.data.localId;
                console.log(response);

                saveLocalUser(userEmail, token, localId);
                dispatch(saveSession(userEmail, token, localId));

                alert('Se logeo exitosamente');
                if (successFunction) {
                    successFunction();
                }
            })
            .catch(error => {
                dispatch(throwError(error.response.data.error.message));
            });
    }
}

const saveLocalUser = (userEmail, token, localId) => {
    let userSession = {
        userEmail,
        token,
        localId
    }
    userSession = JSON.stringify(userSession);
    localStorage.setItem("userSession", userSession);
}

export const saveSession = (userEmail, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userEmail: userEmail,
            idToken: token,
            localId: localId
        }
    }
}

export const throwError = (message) => {
    switch (message) {
        case "EMAIL_NOT_FOUND":
            message = "No existe el Correo ingresado";
            break;
        case "INVALID_PASSWORD":
            message = "La contraseña Ingresada no Corresponde al usuario ingresado";
            break;
        default:
            break;
    }
    return {
        type: actionTypes.ERROR,
        payload: {
            message: message
        }
    }
}

export const persistAuthenticaction = () => {
    return dispatch => {
        let userLogged = localStorage.getItem("userSession");

        if (!userLogged) {
            dispatch(logOut());
        } else {
            userLogged = JSON.parse(userLogged);
            dispatch(saveSession(userLogged.userEmail, userLogged.idToken, userLogged.localId));
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('userSession');
    return {
        type: actionTypes.LOG_OUT
    }
}