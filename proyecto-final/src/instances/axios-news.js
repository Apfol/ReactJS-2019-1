import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sopo-backend-e2157.firebaseio.com/'
});

export default instance;