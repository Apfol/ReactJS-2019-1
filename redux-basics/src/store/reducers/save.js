import * as actionTypes from '../actions';

const initialState = {
    numbers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            return{
                numbers: state.numbers.concat(action.payload.value),
            }
        default:
            return state;
    }
}

export default reducer;