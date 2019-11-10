import {SEARCH_TERM, SEARCH_TERM_FILTERS } from './actionTypes'

const searchTerm = (searchTerm)=>{
    return {
        type: SEARCH_TERM, 
        payload: {
            searchTerm,
        }
    }
}

const searchTermFilters = (searchTerm, filters)=>{
    return {
        type: SEARCH_TERM_FILTERS, 
        payload: {
            searchTerm,
            filters
        }
    }
}

export const search = (searchTer=null, filters=null)=>{
    return dispatch => {
        if(filters==null || filters.length===0){
            console.log("Dispatch sin filtros");
            
            dispatch(searchTerm(searchTer));
        }else if(searchTerm != null && (filters != null && filters.length>0)){
            console.log("Dispatch completo");
            dispatch(searchTermFilters(searchTer, filters))
        }
    }
}