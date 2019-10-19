import * as actionTypes from '../actions';

const initialState = {
    lst: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDTOLIST:
            return {
                lst: [...state.lst, action.payload.element]
            }
        default:
            return state;
    }
}

export default reducer;