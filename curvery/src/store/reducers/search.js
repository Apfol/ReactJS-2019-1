import { SEARCH_TERM, SEARCH_TERM_FILTERS } from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    searchTerm:"",
    filters: []
}

// state, action but destructured
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case SEARCH_TERM:
        console.log("Search term");
        
        return updateObject(state, {
            searchTerm: payload.searchTerm
        });
    case SEARCH_TERM_FILTERS:
        console.log("Search term and filters");

        return updateObject(state,{
            searchTerm: payload.searchTerm,
            filters: payload.filters
        });
    default:
        return state
    }
}
