import * as actionTypes from '../actions';

const initialState = {
    steps: []
}

const reducer = (state = initialState, action) => {
    var newSteps = [...state.steps];
    var date = new Date();
    let hour = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds(), miliseconds = date.getMilliseconds();
    switch (action.type) {
        case actionTypes.INCREMENT:
            newSteps.push("ADDED: 1 at " + hour + ":" + minutes + ":" + seconds + ":" + miliseconds);
            return {
                steps: newSteps
            }
        case actionTypes.DECREMENT:
            newSteps.push("REMOVED: 1 at " + hour + ":" + minutes + ":" + seconds + ":" + miliseconds);
            return {
                steps: newSteps
            }
        case actionTypes.ADD:
            newSteps.push("ADDED: " + action.payload.value + " at " + hour + ":" + minutes + ":" + seconds + ":" + miliseconds);
            return {
                steps: newSteps
            }
        case actionTypes.SUBTRACT:
            newSteps.push("REMOVED: " + action.payload.value + " at " + hour + ":" + minutes + ":" + seconds + ":" + miliseconds);
            return {
                steps: newSteps
            }

        case actionTypes.CLEAR:
            return {
                steps: []
            }
        default:
            return state;
    }
}

export default reducer;