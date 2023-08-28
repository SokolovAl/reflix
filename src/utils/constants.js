import secret from "../secrets/api-token.json";

export const BUDGET = 15;
export const MOVIE_COST = 3;

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${secret.token}`
    }
};

export const API_LINK = "https://api.themoviedb.org/3/";
export const LANGUAGE_PART_OF_API_LINK = "?language=en-US";
export const MOVIE_DETAIL_API_LINK = `${API_LINK}movie/`;
export const IMG_API_LINK = "https://image.tmdb.org/t/p/w500";

export const TOP_MOVIES_API_LINK = `${API_LINK}trending/movie/day${LANGUAGE_PART_OF_API_LINK}`;

export const YOUTUBE_LINK = "https://www.youtube.com/embed/"
