import * as actionTypes from './actionTypes';
import firebase from '../../config/firebase_config';
//lastlast

const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

const endLoading = () => {
    return {
        type: actionTypes.END_LOADING
    }
}

export const showWelcomeToast = (showValue) => {
    return {
        type: actionTypes.SHOW_TOAST,
        payload: {
            welcomeToast: showValue
        }
    }
}

export const saveError = (e) => {
    return {
        type: actionTypes.SAVE_ERROR,
        payload: {
            error: e
        }
    }
}

const saveSignUp = (userName, id) => {
    return {
        type: actionTypes.SIGN_UP,
        payload: {
            userName: userName,
            uid: id,
        }
    };
};

export const signUp = (userData, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        var email = userData.mail;
        var password = userData.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=> {
            var storage = firebase.storage().ref();
            var metadata = {
                contentType: userData.photo.type
            };
            var name = "/user_photos/" + userData.photo.name;
            var uploadTask = storage.child(name).put(userData.photo, metadata);
            
            uploadTask.then(() => {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

                    var userLogged = firebase.auth().currentUser;
                    var uid = userLogged.uid;

                    const newUser = {
                        name: userData.name,
                        address: {
                            address: userData.address.address,
                            city: userData.address.city,
                            zip_code: userData.address.zip_code
                        },
                        phone: {
                            number: userData.phone.number,
                            type: userData.phone.type
                        },
                        photo: downloadURL,
                    }
                    var i = firebase.database().ref('/users/'+uid);
                    i.set(newUser)
                    .then(() => {
                        dispatch(saveSignUp(email,uid));
                        dispatch(endLoading());

                        let userSession = {
                            email,
                            uid
                        };
            
                        userSession = JSON.stringify(userSession);
            
                        localStorage.setItem('userSession', userSession);
            
                        dispatch(endLoading());
                        if (onSuccessCallback) {
                            onSuccessCallback();
                        }
                    
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch(endLoading());
                    });
                });
                
            });
            
        })
        .catch((error) => {
          var errorMessage = error.message;
          dispatch(saveError(errorMessage));
          dispatch(endLoading());
        })
    }
};

const saveLogIn = (userName, id) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            uid: id,
        }
    };
};

export const logIn = (email, password, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=> {
            var user_data = firebase.auth().currentUser;
            var email = user_data.email;
            var uid = user_data.uid;
            dispatch(saveLogIn(email,uid));

            let userSession = {
                email,
                uid
            };

            userSession = JSON.stringify(userSession);

            localStorage.setItem('userSession', userSession);

            dispatch(endLoading());
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        })
        .catch((error) => {
          var errorMessage = error.message;
          dispatch(saveError(errorMessage));
          dispatch(endLoading());
        })
    }
};

export const persistAuthentication = () => {
    return dispatch => {
        let userSession = localStorage.getItem('userSession');
        if(!userSession) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveLogIn(userSession.email, userSession.uid));
        }
        
    }
}

const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};

export const logOutData = () => {
    return dispatch => {
        dispatch(showWelcomeToast(false));
        localStorage.removeItem('userSession');
        firebase.auth().signOut()
        .then(()=> {
            dispatch(logOut())
        })
        .catch(function(error) {
          console.log(error)
        }); 
    }
    
};
