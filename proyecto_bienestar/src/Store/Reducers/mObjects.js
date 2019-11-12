import * as actionTypes from '../Actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    missingObjects: [],
    loadingObjects:false
}

const saveObject = (state, action) => {
    const updatedObjects = [...state.missingObjects, action.payload.mObject];
    return updateObject(state, { missingObjects: updatedObjects});
}

const fetchObjects = (state, action) => {  
    
    return updateObject(state, { missingObjects: action.payload.Objects });
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingObjects: true });
}

const endLoading = (state, action) => {
    
    return updateObject(state, { loadingObjects: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_OBJECT:   return saveObject(state, action);
        case actionTypes.FETCH_OBJECTS: return fetchObjects(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        default: return state;  
    }
}

export default reducer;