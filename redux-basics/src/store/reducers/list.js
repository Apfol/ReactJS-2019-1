import * as actionTypes from '../actions';

const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SAVE:
            var newList = [...state.list];
            newList.push(action.payload.value);
            return{
                list: newList
            }
        default:
            return state;
    }
}

export default reducer;