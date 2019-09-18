import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppWithRouting/App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    requestConfig.data = {
        testValue: 'test',
    }
    return requestConfig;
}, error => {
    console.log("error");
});

axios.interceptors.response.use(responseConfig => {
    console.log(responseConfig);

    responseConfig.data = responseConfig.data.map(post => {
        return {
            ...post,
            author: 'Andrés'
        }
    });
    return responseConfig;
}, error => {
    console.log("error");
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
