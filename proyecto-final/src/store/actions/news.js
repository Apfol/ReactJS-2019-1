import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-database';

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

const loadNews = news => {
    return {
        type: actionTypes.FETCH_NEWS,
        payload: {
            news: news
        }
    };
}

export const fetchNews = () => {
    return dispatch => {
        dispatch(startLoading());

        axios.get('/news.json')
            .then(response => {

                const news = Object.values(response.data).map((newss) => {
                    return {...newss};
                }); 

                dispatch(loadNews(news));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}

export const persistNews = () => {
    return dispatch => {
        let newsSelected = localStorage.getItem('newsSelected');
        if (!newsSelected) {
            dispatch(logOut());
        } else {
            userSession = JSON.parse(userSession);

            dispatch(saveSignUp(userSession.userEmail, userSession.token, userSession.localId));
        }
    }
}