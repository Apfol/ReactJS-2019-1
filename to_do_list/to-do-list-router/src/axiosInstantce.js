import axios from 'axios';

const instance = axios.create({
    baseURL: '<http://jsonplaceholder.typicode.com>'
    //En este objeto es posible agregar toda la configuración que
    //deseemos para esta instancia de Axios
    });
    
export default instance;