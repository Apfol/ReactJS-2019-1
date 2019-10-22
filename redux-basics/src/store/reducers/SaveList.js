import * as actionTypes from '../actions';

const initialState = {
    list: []
}

const saveNumberReducer = (state = initialState, action) => {
    if(action.type==actionTypes.SAVE_BTN_ACTION){
        // No se puede mutar directamente
        const lista = [...state.list];
        lista.push(action.payload.value);

        console.log(lista);
        
        return {
            list: lista
        }
    }

    return state;
}

export default saveNumberReducer;