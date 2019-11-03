// here we all hvae our action creator
import authTypes from './auth.types'
// as an example a function that sets the current user

export const setCurrentUser  =(user) => {
    return{
        type: authTypes.SET_CURRENT_USER,
        payload: user
    }
}

export const clearCurrentUser = () => ({
    type: authTypes.CLEAR_CURRENT_USER
  });