import { SEARCH_TERM, SEARCH_TERM_FILTERS } from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    searchTerm:"",
    filters: [
        "",
    ]
}

// state, action but destructured
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SEARCH_TERM:
        return updateObject(state, {
            searchTerm: payload.searchTerm
        });
    case SEARCH_TERM_FILTERS:
        return updateObject(state,{
            searchTerm: payload.searchTerm,
            filters: payload.filters
        });
    default:
        return state
    }
}
