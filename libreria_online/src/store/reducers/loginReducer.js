import * as actionTypes from '../actions/actions';
import updateObject from '../utility';


const initialState = {
    logged: false,
    loggedUser: {},
    users: []
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
    const userTemp = action.payload.user;
    return updateObject(state, { logged: true, loggedUser: userTemp });
}

export default reducer;
