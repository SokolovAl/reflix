import {IMG_API_LINK, TOP_MOVIES_API_LINK, options} from "./constants";

const fetchMoviesData = () => {
    return fetch(TOP_MOVIES_API_LINK, options)
        .then((response) => response.json())
        .then((data) => {
            const firstTopMovies = data.results.slice(0, 12);

            return firstTopMovies.map((movie) => ({
                id: movie.id,
                isRented: false,
                title: movie.title,
                img: IMG_API_LINK + movie.poster_path,
                description: movie.overview,
                year: new Date(movie.release_date).getFullYear()
            }));
        })
        .catch((error) => {
            console.error("Error fetching movies data:", error);
            return [];
        });
};

export default fetchMoviesData;

