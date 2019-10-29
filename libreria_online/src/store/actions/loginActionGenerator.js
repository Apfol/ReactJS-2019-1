import * as actionTypes from './actions';

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        payload: {
            newUser: user
        }
    }
}

export const setLoggedUser = (user) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            user: user
        }
    }
}