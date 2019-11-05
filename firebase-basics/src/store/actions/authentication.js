import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyDNMJLoK-YoyV3d-fBih1xrr-zQgACHmoY';

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
        axios.post('/accounts:signInWithPassword?key=' + API_KEY, authData)
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

                console.log(response);

                localStorage.setItem('userSession', userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                if (error.response) {
                    dispatch(throwError(error.response.data.error.message));
                } else {
                    console.log(error);
                }
                dispatch(endLoading());
            })
    }
};

export const throwError = (message) => {
    switch (message) {
        case "EMAIL_NOT_FOUND":
            message = "No existe el Correo ingresado";
            break;
        case "INVALID_PASSWORD":
            message = "La contraseña Ingresada no Corresponde al usuario ingresado";
            break;
        case "INVALID_EMAIL":
            message = "El correo es invalido, por favor revise los datos";
            break;
        case "WEAK_PASSWORD":
            message = "La contraseña debe tener como minimo 6 caracteres";
            break;
        case "EMAIL_EXISTS":
            message = "El correo ya existe debes intentar con otro";
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

export const signIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signUp?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                console.log(response);

                dispatch(saveSignIn(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                if (error.response) {
                    dispatch(throwError(error.response.data.error.message));
                } else {
                    console.log(error);
                }
                dispatch(endLoading());
                dispatch(endLoading());
            })
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');

        if (!userSession) {
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