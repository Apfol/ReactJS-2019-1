import * as actionTypes from '../actions';

// El reducer solo Solo cambia el state que tiene

// This is the storage of the reducer, es un state pero de redux
const initialState = {
    counter: 0
}


// Los actions siempre deben de tener al menos un type
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                counter: state.counter + action.payload.value
            }
        case actionTypes.SUBTRACT:
            return {
                counter: state.counter - action.payload.value
            }
        default:
            return state;
    }
}

export default reducer;