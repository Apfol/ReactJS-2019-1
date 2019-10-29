import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter';
import counterSaver from './store/reducers/SaveList';

// Se accede con los nombres en los demas clientes
const rootReducer = combineReducers ({
    counterStore: counterReducer,
    counterSaver: counterSaver
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
