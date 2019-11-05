import { LOGIN_ERROR, SIGN_IN_ERROR } from './actionTypes'

const signUpErrors = () => {
    return {
        type: SIGN_IN_ERROR
    }
}

const loginErrors = () => {
    return {
        type: LOGIN_ERROR
    }
}
export const setSignUpErrors = (msg) => {
    return dispatch => {
        console.log("sign up");
        dispatch(signUpErrors())
    };
}

export const setLoginErrors = (msg) => {
    return dispatch => {
        console.log("login");
        dispatch(loginErrors())
    };
}

