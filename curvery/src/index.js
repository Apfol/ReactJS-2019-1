import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Firebase, { FirebaseContext } from './services/Firebase'


// TODO: PUT ALL REDUCERS IN A FILE AND COMBINE AND THEN IMPORT HERE JUST THE store
import authenticationReducer from './store/reducers/authentication';
import search from './store/reducers/search';

const rootReducer = combineReducers({
    authenticationStore: authenticationReducer,
    searchStore: search
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    // <FirebaseContext.Provider value={new Firebase()}>
    //     <Provider store={store}>
    //         <FirebaseContext.Consumer>
    //             {firebase => <App firebase={firebase}></App>}
    //         </FirebaseContext.Consumer>
    //     </Provider>
    // </FirebaseContext.Provider>
    // , document.getElementById('root')
    
    <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
             <App ></App>
    </Provider>
</FirebaseContext.Provider>
, document.getElementById('root')

    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
