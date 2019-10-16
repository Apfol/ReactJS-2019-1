import * as actionTypes from '../actions';

const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH:
            return {
                list: [...state.list, action.payload.element]
            }
        default:
            return state;
    }
}

export default reducer;
