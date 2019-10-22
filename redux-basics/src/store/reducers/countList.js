import * as actionTypes from '../actions';

const initialState = {
    countList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            return {
                countList: state.countList.concat(action.payload.saveCount)
            }
        default:
            return state;
    }
}

export default reducer;