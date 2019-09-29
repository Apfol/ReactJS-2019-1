import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-json-server.typicode.com/nbc1903/JsonRepo/'
});

export default instance;