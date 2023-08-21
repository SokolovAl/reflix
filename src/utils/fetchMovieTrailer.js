import {IMG_API_LINK, LANGUAGE_PART_OF_API_LINK, MOVIE_DETAIL_API_LINK, options} from "./constants";

const fetchMovieTrailer = (movieID) => {
    return fetch(`${MOVIE_DETAIL_API_LINK}${movieID}/videos${LANGUAGE_PART_OF_API_LINK}`, options)
        .then(response => response.json())
        .then(data => {
            const officialTrailer = data.results.find(video => video.name === "Official Trailer");

            if (officialTrailer) {
                return officialTrailer.key;
            } else {
                return null;
            }
        });
};

export default fetchMovieTrailer;