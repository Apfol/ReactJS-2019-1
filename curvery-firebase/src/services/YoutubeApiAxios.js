import axios from "axios";

// The apy key comes from the .env file
const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
});

export default instance;