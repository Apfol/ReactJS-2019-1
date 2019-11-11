import * as actionTypes from '../../Store/Actions/actionTypes';
import updateObject from './utility';


const initialState = {
    loadingCreate: false
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingCreate: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingCreate: false });
}

const prestamo = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CreatePrestamo: return prestamo(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        default: return state;
    }
}

export default reducer; 