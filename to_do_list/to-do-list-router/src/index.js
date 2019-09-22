import { StyleRoot } from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from './axiosInstantce';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

axios.interceptors.request.use(requestConfig =>{
    requestConfig.data = {
        testValue: 'test'
    }
    console.log(requestConfig);
    return requestConfig;
})

axios.interceptors.response.use(requestConfig =>{
    requestConfig.data = requestConfig.data.map(post => {
        return{
            ...post,
            task: "Hola"
        }
    })
    return requestConfig
})

ReactDOM.render(
    <StyleRoot>
        <App />
    </StyleRoot>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
