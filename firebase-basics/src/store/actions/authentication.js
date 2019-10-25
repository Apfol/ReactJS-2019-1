import * as actionTypes from './actionTypes';

export const logIn = (userName) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName
        }
    };
};

export const signIn = (userName) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: {
            userName: userName
        }
    };
};

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};