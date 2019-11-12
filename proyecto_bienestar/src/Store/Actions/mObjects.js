import * as actionTypes from './actionTypes';
import axios from '../../Instances/Axios-Objects';

// Create a reference with an initial file path and name

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

const storeObject = mObject => {
    return {
        type: actionTypes.SAVE_OBJECT,
        payload: {
            mObject: mObject
        }
    };
};

export const saveObject = mObject => {
    return dispatch => {
        dispatch(startLoading());

        axios.post('/missingObject.json', mObject)
            .then(response => {
                console.log(response);

                dispatch(storeObject(mObject));
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
};
  


const loadObjects = Objects => {

    return {
        type: actionTypes.FETCH_OBJECTS,
        payload: {
            Objects: Objects
        }
        
    };
}

export const fetchObjects = () => {
    return dispatch => {
        dispatch(startLoading());

        axios.get('/missingObject.json')
            .then(response => {
                

                const Objects = Object.values(response.data).map((mObject) => {
                    return {...mObject};
                });
               
                dispatch(loadObjects(Objects));
                
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);

                dispatch(endLoading());
            })
    }
}