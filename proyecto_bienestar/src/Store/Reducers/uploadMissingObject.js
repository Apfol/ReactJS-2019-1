import * as actionTypes from '../../Store/Actions/actionTypes';
import updateObject from './utility';

const initialState = {
    /*isFounded: false,
    foundedBy: '',
    foundLocation: '',
    image: '',
    isDelivered: false,
    lostBy: '',
    objectName: ''*/
    missingObjects: []
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
    return updateObject(state, { missingObjects: action.payload.missingObjects})
}


const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPLOAD_MISSING_OBJECT: return updateMissingObject(state, action);
        default: return state;
    }
}

export default reducer;