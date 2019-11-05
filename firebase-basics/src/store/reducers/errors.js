import updateObject from "../utility"
import {LOGIN_ERROR, SIGN_IN_ERROR} from '../actions/actionTypes'

const initial_state = {
    login_error:false,
    sign_up_error: false
}

const login_error = (state, action)=>{
    return updateObject(
        state,
        {
            login_error: true,
            sign_up_error: false
        }
    );
}


const sign_up_error = (state, action)=>{
    return updateObject(
        state,
        {
            login_error: false,
            sign_up_error: true
        }
    );
}
const errors = (state=initial_state, action)=>{
    switch(action.type){
        case LOGIN_ERROR:
            return login_error(state, action);
            break;
        case SIGN_IN_ERROR:
            return sign_up_error(state, action);
            break;
        default:
            return state;
    }
}

export default errors;