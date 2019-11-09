import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import authenticationReducer from './store/reducers/authentication';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers ({
    authenticationStore: authenticationReducer,
    userStore: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
