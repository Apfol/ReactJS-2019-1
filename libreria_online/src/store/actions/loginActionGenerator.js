import * as actionTypes from './actions';
import axios from '../../axios/axios-session';

const API_KEY = "AIzaSyDhDbB3Bb43TJ-_uj5PafUnfZuOQpkXaN8";
export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        payload: {
            newUser: user
        }
    }
}

export const logOn = (userData, successFunction) => {
    return dispatch => {
        axios.post('/accounts:signInWithPassword?key=' + API_KEY, userData)
            .then(response => {
                const userEmail = userData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;

                let userSession = {
                    userEmail,
                    token,
                    localId
                };

                userSession = JSON.stringify(userSession);
                console.log(response);
                localStorage.setItem('userSession', userSession);
                dispatch(saveSession(userEmail, token, localId));
                alert('Se logeo exitosamente');
                if (successFunction) {
                    successFunction();
                }

            }).catch(error => {
                console.log(error);
            });
    }
}

export const saveSession = (userEmail, token, localId) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userEmail: userEmail,
            idToken: token,
            localId: localId
        }
    }
}