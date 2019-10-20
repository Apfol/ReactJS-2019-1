export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const addResult = ( value ) => {
    return {
        type: ADD,
        payload: {
            value: value
        }
    }
}

export const add = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addResult(value))
        }, 2000);
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        payload: {
            value: value
        }
    };
};