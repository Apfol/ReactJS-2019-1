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

const saveSession = (userName) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName
        }
    };
};

export const logIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signInWithPassword?key='+API_KEY, authData)
            .then(response => {
                console.log(response);

                dispatch(saveSession(authData.email));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback()
                }
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
};

export const saveSignIn = (userName) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            userName: userName
        }
    };
};


export const signIn = (authData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('/accounts:signUp?key='+API_KEY, authData)
            .then(response => {
                console.log(response);

                dispatch(saveSignIn(authData.email));
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback()
                }
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
};

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};