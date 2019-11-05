import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyectopruebareact.firebaseio.com/'
});

export default instance;