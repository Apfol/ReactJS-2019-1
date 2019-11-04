import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false
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

const signUp = (state, action) => {
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
        },
        authenticationError : false
    });
}

const authError = (state,action) =>{
    return updateObject(state,{
        authenticationError : true,
    });
}

const resetError = (state,action) =>{
    return updateObject(state,{
        authenticationError : false,
    });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.AUTH_ERROR : return authError(state, action);
        case actionTypes.RESET_ERROR : return resetError(state, action);
        default: return state;
    }
}

export default reducer;