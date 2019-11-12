
import * as actionTypes from "./actionTypes";
import axios from "../../Instances/axios-authentication";
import firebase from "../../Instances/FireBase";
const API_KEY = "AIzaSyDYO4fQlKsUDsfX_qe5y4JLXCJ4Z7acCx0";

const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

const endLoading = () => {
  return {
    type: actionTypes.END_LOADING
  };
};
export const loginerror = () => {
  return {
    type: actionTypes.LOGIN_ERROR
  };
};

export const saveSession = (userName, token, localId) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId
    }
  };
};

const saveSignIn = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId
    }
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return dispatch => {
    dispatch(startLoading());    
    var provider = new firebase.auth.OAuthProvider("microsoft.com");    
    provider.addScope("user.Read");
    provider.addScope("contacts.read");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        // OAuth access token can also be retrieved:
        // result.credential.accessToken
        const userEmail = result.additionalUserInfo.profile.givenName;
        const token = result.credential.accessToken;
        const localId = result.user.uid;

        let userSession = {
          token,
          userEmail,
          localId
        };
                
        console.log(result)        
        userSession = JSON.stringify(userSession);
        localStorage.setItem("userSession", userSession);
        dispatch(saveSession(userEmail, token, localId));        
        dispatch(endLoading());
        if (onSuccessCallback) {
            onSuccessCallback();
        }
      })
      .catch(function(error) {
        console.log(error);
        dispatch(loginerror());
        dispatch(endLoading());
      });    
  };
};

export const signIn = (authData, onSuccessCallback) => {
  return dispatch => {
    dispatch(startLoading());
    axios
      .post("/accounts:signUp?key=" + API_KEY, authData)
      .then(response => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        const img = response.data.Img;
        dispatch(saveSignIn(userEmail, token, localId, img));
        dispatch(endLoading());

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch(error => {
        console.log("El error" + error);
        dispatch(endLoading());
      });
  };
};

export const persistAuthentication = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(function() {        
        dispatch(logOut());        
      })
      .catch(function(error) {
        // An error happened.        
      });
  };
};

export const logOut = () => {
  localStorage.removeItem("userSession");
  return {
    type: actionTypes.LOG_OUT
  };
};
