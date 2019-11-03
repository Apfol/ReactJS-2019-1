import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    isSigninError: false,
    isLoginError: false,
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const signIn = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: '',
            idToken: '',
            localId: ''
        }
    });
}

const startLoading = state => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = state => {
    return updateObject(state, { loadingAuth: false });
}

const startSigninError = state => {
    return updateObject(state, { isSigninError: true });
}

const endSigninError = state => {
    return updateObject(state, { isSigninError: false });
}

const startLogininError = state => {
    return updateObject(state, { isLoginError: true });
}

const endLogininError = state => {
    return updateObject(state, { isLoginError: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_IN: return signIn(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.START_SIGNIN_ERROR: return startSigninError(state, action);
        case actionTypes.END_SIGNIN_ERROR: return endSigninError(state, action);
        case actionTypes.START_LOGIN_ERROR: return startLogininError(state, action);
        case actionTypes.END_LOGIN_ERROR: return endLogininError(state, action);
        default: return state;
    }
}

export default reducer;