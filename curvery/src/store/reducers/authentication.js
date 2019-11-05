import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        username: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            username: action.payload.username,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const signIn = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            username: action.payload.username,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            username: '',
            idToken: '',
            localId: ''
        }
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
        case actionTypes.SIGN_IN: return signIn(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        default: return state;
    }
}

export default reducer;