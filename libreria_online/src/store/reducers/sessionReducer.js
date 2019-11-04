import * as actionTypes from '../actions/actions';
import updateObject from '../utility';


const initialState = {
    logged: false,
    loggedUser: {
        userEmail: '',
        localId: '',
        idToken: ''
    },
    loadingAuth: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return setLoggedUser(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.ERROR: return throwError(state, action);
        default: return state;
    }
}


const setLoggedUser = (state, action) => {
    return updateObject(state, {
        logged: true, loggedUser: {
            userEmail: action.payload.userEmail,
            localId: action.payload.localId,
            idToken: action.payload.idToken
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        logged: false,
        loggedUser: {
            userEmail: '',
            localId: '',
            idToken: ''
        }
    });
}

const throwError = (state, action) => {
    return updateObject(state, {
        message: action.payload.message
    });
}

export default reducer;
