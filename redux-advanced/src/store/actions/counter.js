import * as actionTypes from './actionsTypes';


// TODOS LOS ACTION CREATORS
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

const addResult = ( value ) => {
    return {
        type: actionTypes.ADD,
        payload: {
            value: value
        }
    }
}

// Action creater that is just a function that calls the dispatch
export const add = (value) => {
    return dispatch => { // Porque instale el thunk para hacer dispatch
        setTimeout(() => {
            dispatch(addResult(value))
        }, 2000);
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: {
            value: value
        }
    };
};