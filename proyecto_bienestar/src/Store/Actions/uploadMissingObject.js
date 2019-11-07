import * as actionTypes from './actionTypes';
import axios from '../../Instances/axios-authentication';
import updateObject from '../Reducers/utility';

const API_KEY = 'AIzaSyDYO4fQlKsUDsfX_qe5y4JLXCJ4Z7acCx0';

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

const uploadMissingObject = (foundedBy, foundLocation, image, objectName) => {
    return {
        type: actionTypes.UPLOAD_MISSING_OBJECT,
        payload:{
            foundedBy,
            foundLocation,
            image,
            objectName
        }
    }
}

export const updateMissingObjectAction = (missingObjectData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        axios.post('https://proyectobienestar-21e23.firebaseio.com/missingObject.json', missingObjectData)
            .then(response => {

                const foundedBy = missingObjectData.foundedBy;
                const foundLocation = missingObjectData.foundLocation;
                const image = missingObjectData.image;
                const objectName = missingObjectData.objectName;
                
                let missingObjectDataP = {
                    foundedBy,
                    foundLocation,
                    image,
                    objectName
                };

                missingObjectDataP = JSON.stringify(missingObjectDataP);                

                localStorage.setItem('userSession', missingObjectDataP);
                dispatch(updateObject(foundedBy,foundLocation,image,objectName))
                console.log("Sirvio" + response);                
                dispatch(endLoading());

                if (onSuccessCallback) {
                    onSuccessCallback();
                }
            })
            .catch(error => {                                
                dispatch(endLoading());
            })
    }
};