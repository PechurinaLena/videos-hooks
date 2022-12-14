import { useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm).then(r => r);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        }).then(r => r);

        setVideos(response.data.items);
    }

    return [videos, search];
}

export default useVideos;