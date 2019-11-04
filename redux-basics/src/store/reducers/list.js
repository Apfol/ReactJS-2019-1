import * as actionTypes from '../actions';

const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            return {
                list: [
                    ...state.list, action.payload.value
                ]
            }

        default:
            return state;
    }
}

export default reducer;