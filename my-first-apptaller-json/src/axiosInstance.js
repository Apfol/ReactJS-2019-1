import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-json-server.typicode.com/anareyto/RepositorioAnaJson'
});

export default instance;