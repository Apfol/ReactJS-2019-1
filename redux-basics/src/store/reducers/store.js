import * as actionType from "../actions";
const initialState = {
    List: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE:
            return {
                List: [
                    ...state.List,
                    action.payload.Value1
                ]
            }
        default:
            return state;
    }
}


export default reducer;