import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import authenticationReducer from './store/reducers/authentication';
import shoppingCartReducer from './store/reducers/shoppingCart';

const rootReducer = combineReducers ({
    authenticationStore: authenticationReducer,
    shoppingCartStore: shoppingCartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>   
    </Provider>
, document.getElementById('root'));


serviceWorker.unregister();
