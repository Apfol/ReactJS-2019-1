import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sabana-reactjs-2019.firebaseio.com/'
});

export default instance;