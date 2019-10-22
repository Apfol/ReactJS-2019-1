import * as actionTypes from '../actions';

const initialState = {
    countArray: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_COUNTER:
            let updatedCountArray = [...state.countArray];
            updatedCountArray.push(action.payload.value);

            return {
                countArray: updatedCountArray
            };
        default:
            return state;
    }
};

export default reducer;
