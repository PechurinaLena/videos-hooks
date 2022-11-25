import axios from 'axios';

const KEY = 'AIzaSyCnwzzlu78TozRzD3CVE4usqnDncjk2N1c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})
