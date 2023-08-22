import {IMG_API_LINK, LANGUAGE_PART_OF_API_LINK, MOVIE_DETAIL_API_LINK, options} from "./constants";

const fetchMovieDetailsData = (movieID) => {
    return fetch(`${MOVIE_DETAIL_API_LINK}${movieID}${LANGUAGE_PART_OF_API_LINK}`, options)
        .then(response => response.json())
        .then(data => {
            const year = new Date(data.release_date).getFullYear();

            return {
                id: data.id,
                title: data.title,
                img: IMG_API_LINK + data.poster_path,
                description: data.overview,
                year: year
            };
        });
};

export default fetchMovieDetailsData;
