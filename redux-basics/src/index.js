import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter';
<<<<<<< HEAD
import saveCounterReducer from './store/reducers/saveCounter';

const rootReducer = combineReducers({
    counterStore: counterReducer,
    saveCounterReducer: saveCounterReducer
=======

const rootReducer = combineReducers ({
    counterStore: counterReducer
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
});

const store = createStore(rootReducer);

<<<<<<< HEAD
store.subscribe(() => {
    console.log('[Subscription]: ', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
=======
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
>>>>>>> 85c2175d7bf690f47d0dfebdb697c1a397b2d5fb
registerServiceWorker();
