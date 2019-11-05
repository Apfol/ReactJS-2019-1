import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';
import {setLoginErrors, setSignUpErrors} from  './errors';
const API_KEY = 'AIzaSyAT-XImd5ExqSH-3y2x1_dZ6WrnXVAbKJ0';

const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

const endLoading = () => {
    return {
        type: actionTypes.END_LOADING
    }
}

const saveSession = (userName, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

const saveSignIn = (userName, token, localId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signInWithPassword?key='+API_KEY, authData)
            .then(response => {                
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId
                };

                userSession = JSON.stringify(userSession);
                localStorage.setItem('userSession', userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }

            })
            .catch(error => {
                dispatch(endLoading());
                setLoginErrors("Nothing, there was an error in the login");
            })
    }
};

export const signIn = (authData, onSuccessCallback) => {
    let error = true;
    return dispatch => {
        dispatch(startLoading());
        axios.post('/accounts:signUp?key='+API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                dispatch(saveSignIn(userEmail, token, localId));
                dispatch(endLoading());
                error = false;
                if (onSuccessCallback) {
                    onSuccessCallback();
                }
                console.log("fkjsdfnojsdfnñsdasdo ",response);
            })
            .catch(error => {
                dispatch(endLoading());
                console.log("Errrross");
                setSignUpErrors("Nothing, there was an error in the sign up process");
            });
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');
        if(!userSession) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveSignIn(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('userSession');

    return {
        type: actionTypes.LOG_OUT
    };
};