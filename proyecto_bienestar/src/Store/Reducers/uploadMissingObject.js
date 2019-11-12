import * as actionTypes from '../../Store/Actions/actionTypes'
import updateObject from '../Reducers/utility'

const initialState = {
    missingObjects: [],
    loadingObject: false
}

const updateMissingObject = (state,action) => {

    return updateObject(state, {
        missingObject:{
            isFounded:false,
            foundedBy: action.payload.nameStudent,
            foundLocation: action.payload.foundlocation,
            image:action.payload.missingobjectimage,
            isDelivered: false,
            lostBy: '',
            objectName: action.payload.objectname
        }
    });
}

const fetchMissingObjects = (state, action) => {
    
    console.log("====="+updateObject(state, {missingObjects: action.payload.Objects}))
    return updateObject(state, {missingObjects: action.payload.Objects})    
    //{missingObjects: state.missingObjects.concat(action.payload.Objects)}
    
}


const startLoading = (state, action) => {
    return updateObject(state, { loadingObject: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingObject: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPLOAD_MISSING_OBJECT: return updateMissingObject(state, action);
        case actionTypes.LOAD_MISSING_OBJECT: return fetchMissingObjects(state, action);
        default: return state;
    }
}

export default reducer;