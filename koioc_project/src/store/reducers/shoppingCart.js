import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    shoppingCart: [],
    loadingCart: false
}

const updateCart = (state, action) => {
    return updateObject(state, { shoppingCart: action.payload.products});
}

const fetchCart = (state, action) => {
    return updateObject(state, { shoppingCart: action.payload.shoppingCart})
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingCart: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingCart: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CART: return updateCart(state, action);
        case actionTypes.FETCH_CART: return fetchCart(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        default: return state;
    }
}

export default reducer;