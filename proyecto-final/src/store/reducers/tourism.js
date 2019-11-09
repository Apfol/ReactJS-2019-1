import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    places: [],
    loadingPlaces: false
}

const fetchTourism = (state, action) => {
    return updateObject(state, { places: action.payload.places})
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingPlaces: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingPlaces: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOURISM: return fetchTourism(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        default: return state;
    }
}

export default reducer;