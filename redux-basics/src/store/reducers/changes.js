import * as actionTypes from '../actions';

const initialState = {
    changes: []
}

const changes = (state = initialState, action) =>{
    if (action.type === actionTypes.SAVE) {
        var newChanges = [...state.changes];
        newChanges.push(action.payload.value);
        
        return {
            changes: newChanges
        }
    }

    return state;
}

export default changes;