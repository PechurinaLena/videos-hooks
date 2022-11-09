import axios from 'axios';

const KEY = 'AIzaSyCkvvuWXf05TOZiCzf7eyJoEkHw470_ZiA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})
