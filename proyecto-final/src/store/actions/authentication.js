import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyDN8WGwmWm1ljKJ6BZsiIpV5aIRbXq7YyI';

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

const startSignupError = () => {
    return {
        type: actionTypes.START_SIGNUP_ERROR
    }
}

const endSignupError = () => {
    return {
        type: actionTypes.END_SIGNUP_ERROR
    }
}

const startloginError = () => {
    return {
        type: actionTypes.START_LOGIN_ERROR
    }
}

const endloginError = () => {
    return {
        type: actionTypes.END_LOGIN_ERROR
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

const saveSignUp = (userName, token, localId) => {
    return {
        type: actionTypes.SIGN_UP,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId
        }
    };
};

export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading());
        dispatch(endloginError());
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
                console.log(error);
                dispatch(endLoading());
                dispatch(startloginError());
            })
    }
};

export const signUp = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading());
        dispatch(endSignupError());
        axios.post('/accounts:signUp?key=' + API_KEY, authData)
            .then(response => {
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                console.log(response);

                dispatch(saveSignUp(userEmail, token, localId));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {
                console.log(error);
                dispatch(endLoading());
                dispatch(startSignupError());
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

            dispatch(saveSignUp(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}

export const logOut = () => {
    localStorage.removeItem('userSession');

    return {
        type: actionTypes.LOG_OUT
    };
};
