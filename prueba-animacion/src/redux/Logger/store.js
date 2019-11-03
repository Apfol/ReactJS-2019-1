import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root.reducer';

const middlewares = [logger];


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store;