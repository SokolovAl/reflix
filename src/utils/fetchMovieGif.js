import {GIF_API_LINK, GIF_API_TOKEN} from "./constants";

const fetchMovieGif = (movieTitle) => {
    return fetch(`${GIF_API_LINK}${movieTitle}${GIF_API_TOKEN}`)
        .then(response => response.json())
        .then(data => {
            const movieGif = data.data[0];

            if (movieGif) {
                return movieGif.embed_url;
            } else {
                return null;
            }
        })
        .catch(error => {
            console.error("Error fetching movie gif:", error);
        });
};

export default fetchMovieGif;
