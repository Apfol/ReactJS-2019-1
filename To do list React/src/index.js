import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(requestConfig => {
        console.log(requestConfig)
        requestConfig.data = {
                testValue: "test"
        }
        return requestConfig
})

axios.interceptors.response.use(responseConfig =>{
        console.log(responseConfig)
        responseConfig.data = responseConfig.data.map(post =>{ 
                return{
                        ...post,
                        title : "Mi titulo"
                }
                
        })
        return responseConfig
})

//axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"

ReactDOM.render(
  
        <App />
, document.getElementById('root'));
serviceWorker.unregister();
