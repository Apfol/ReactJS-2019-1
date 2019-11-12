import axios from 'axios';
const instance = axios.create({
    baseURL: "https://proyectobienestar-21e23.firebaseio.com/"
});
export default instance; 

