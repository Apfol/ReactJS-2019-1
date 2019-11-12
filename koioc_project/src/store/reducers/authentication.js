import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        uid: ''
    },
    loadingAuth: false,
    error: '',
    welcomeToast: false
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            uid: action.payload.uid
        }
    });
}

const signUp = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            uid: action.payload.uid
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: '',
            uid: ''
        }
    });
}

const showWelcomeToast = (state, action) => {
    return updateObject(state, { welcomeToast: action.payload.welcomeToast });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}

const saveError = (state, action) => {
    return updateObject(state, { error: action.payload.error });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.SAVE_ERROR: return saveError(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.SHOW_TOAST: return showWelcomeToast(state, action);
        default: return state;
    }
}

export default reducer;