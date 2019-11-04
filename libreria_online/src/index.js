import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import sessionReducer from './store/reducers/sessionReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    sessionStore: sessionReducer
});
const compositeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, compositeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
