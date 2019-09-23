import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-json-server.typicode.com/MaoDeew/fakeJSONServer'
});

export default instance;