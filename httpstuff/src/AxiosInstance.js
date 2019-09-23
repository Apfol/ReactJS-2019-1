import axios from "axios";
const instance = axios.create({
    baseURL: "http://my-json-server.typicode.com/DanielR9808/jsonServer/"
});
export default instance;