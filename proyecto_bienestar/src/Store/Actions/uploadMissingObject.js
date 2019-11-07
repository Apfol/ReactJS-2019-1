import * as actionTypes from './actionTypes';
import axios from '../../Instances/axios-authentication';
import updateObject from '../Reducers/utility';

//const API_KEY = 'AIzaSyDYO4fQlKsUDsfX_qe5y4JLXCJ4Z7acCx0';

const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

const endLoading = () => {
    return {
        type: actionTypes.END_LOADING
    }
}

const uploadMissingObject = (uploadMissingObjectPost) => {
    return {
        type: actionTypes.UPLOAD_MISSING_OBJECT,
        payload: uploadMissingObjectPost
    }
}

export const updateMissingObjectAction = (missingObjectData) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('https://proyectobienestar-21e23.firebaseio.com/missingObject.json', missingObjectData)
            .then(response => {
                                                
                console.log("Sirvio" + response);                
                
                dispatch(uploadMissingObject(missingObjectData));                
                dispatch(endLoading());
            })
            .catch(error => {   
                console.log(error)
                dispatch(endLoading());
            })
    }
};