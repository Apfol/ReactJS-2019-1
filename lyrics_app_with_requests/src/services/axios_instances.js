import axios from 'axios';
import credentials from './credentials';

console.log(credentials);

const apiVersion = "/1.1";
// As the browser does not allow cors, use this extension called: Allow CORS: Access-Control-Allow-Origin
// Or and intermediate web
const baseURL= "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws";
// const baseURL= "https://api.musixmatch.com/ws";

const instance  = axios.create({
    baseURL: baseURL+apiVersion,
    params:{
        apikey:credentials.apiKeyMusixMatch
    }
});

// instance.defaults.headers.common['apikey'] = credentials.apiKeyMusixMatch;  // No funciona 🤕 per si con default params
instance.defaults.headers.get["Content-Type"] = "application/json";
// instance.defaults.headers.get["Origin"] = "react_app";
// instance.defaults.headers.get["X-Requested-With"] = "react_app";



export default instance;