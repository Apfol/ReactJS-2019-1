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

const storeComment = comment => {
    return {
        type: actionTypes.SAVE_COMMENT,
        payload: {
            comment: comment
        }
    };
};

export const saveComment = (comment, idPlace) => {
    return dispatch => {
        dispatch(startLoading());
        axios.post('/touristPlaces/' + idPlace + '/comments.json', comment)
            .then(response => {
                dispatch(storeComment(comment));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
};