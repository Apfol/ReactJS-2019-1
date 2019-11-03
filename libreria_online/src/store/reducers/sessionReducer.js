import * as actionTypes from '../actions/actions';
import updateObject from '../utility';


const initialState = {
    logged: false,
    loggedUser: {
        userName: '',
        localId: '',
        idToken: ''
    },
    loadingAuth: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER: return addUser(state, action);
        case actionTypes.LOGIN: return setLoggedUser(state, action);
        default: return state;
    }
}

const addUser = (state, action) => {
    const newUser = action.payload.newUser;
    let newUsers = [...state.users];
    newUsers.push(newUser);
    return updateObject(state, { users: newUsers });
}

const setLoggedUser = (state, action) => {
    return updateObject(state, {
        logged: true, loggedUser: {
            userName: action.payload.userEmail,
            localId: action.payload.localId,
            idToken: action.payload.idToken
        }
    });
}

export default reducer;
