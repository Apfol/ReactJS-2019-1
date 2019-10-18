import * as actionTypes from '../actions';

const initialState = {
    numbers: [],
    hola:"jo"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            return {
                numbers: state.numbers.concat(action.payload.newNumber)
               //hola: action.payload.newNumber
            }
        default: 
            return state;
    }
}

export default reducer;