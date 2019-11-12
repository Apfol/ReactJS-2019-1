import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Firebase, { FirebaseContext } from "./components/Firebase";

import search from "./components/store/reducers/search";

const rootReducer = combineReducers({
    searchStore: search
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

/* 
Doing it this way, we can be assured that Firebase is only instantiated once 
and that it is injected via React's Context API to React's component tree.

Now, every component that is interested in using Firebase has access to the
Firebase instance with a FirebaseContext.Consumer component
*/
const rootElement = (
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <App />
        </Provider>
    </FirebaseContext.Provider>
);

ReactDOM.render(rootElement, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();