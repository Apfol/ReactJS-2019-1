import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-database';

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

const loadPlaces = places => {
    return {
        type: actionTypes.FETCH_TOURISM,
        payload: {
            places: places
        }
    };
}

export const fetchTourism = () => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('/touristPlaces.json')
            .then(response => {

                const places = Object.values(response.data).map((place) => {
                    return {...place};
                }); 


                dispatch(loadPlaces(places));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}