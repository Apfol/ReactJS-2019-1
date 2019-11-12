import * as actionTypes from './actionTypes';
import firebase from '../../config/firebase_config';
import axios from 'axios';
import {notify} from 'react-notify-toast';
//ultimo
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

const storeProduct = item => {
    return {
        type: actionTypes.UPDATE_CART,
        payload: {
            products: item
        }
    };
};

export const saveProduct = (product, uid, onSuccessCallback) => {
    return dispatch => {
        dispatch(startLoading());
        var i = firebase.database().ref('/users/'+uid+'/employees/');
        i.set(product)
        .then(response => {
            dispatch(storeProduct(product));
            dispatch(endLoading());

            if (onSuccessCallback) {
                notify.show("Successful payment!", "success", 5000);
                onSuccessCallback();
            }
        
        })
        .catch(error => {
            console.log(error);

            dispatch(endLoading());
        });
    }
};

const loadCart = cart => {
    return {
        type: actionTypes.FETCH_CART,
        payload: {
            shoppingCart: cart
        }
    };
}

export const fetchCart = (uid) => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('https://koioc-23ec2.firebaseio.com/users/'+uid+'.json')
        .then(response  => {
            var shoppingCart = []; 
            if (response.data.employees !== undefined) {
                shoppingCart = response.data.employees.map((product)=>{
                    return product
                })
            }
            
            dispatch(loadCart(shoppingCart));
            dispatch(endLoading());
            
        })
        .catch(error => {
            console.log(error);

            dispatch(endLoading());
        })
    }
}