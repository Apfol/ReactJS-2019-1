import axios from "axios";

// TODO: ERASE IN PRODUCTION AND PUT IN ENV VARIABLE
import Credentials from './credentials';

const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key: Credentials.youtube_api_credentials.key
    }
});

export default instance;