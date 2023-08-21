export const BUDGET = 15;
export const MOVIE_COST = 3;

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWVlYjIyODFmYjg5Y2Y1Y2JiNDk2NGVmZWZmZTc0YiIsInN1YiI6IjY0ZGNkYzQ0MzcxMDk3MDExYzUyNDZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKGQKcnYHhnVE4Xz05yMmQaYvI64QnH0Cv-zSKfBfro"
    }
};

export const API_LINK = "https://api.themoviedb.org/3/"
export const LANGUAGE_PART_OF_API_LINK = "?language=en-US"
export const MOVIE_DETAIL_API_LINK = `${API_LINK}movie/`
export const IMG_API_LINK = "https://image.tmdb.org/t/p/w500"

export const TOP_MOVIES_API_LINK = `${API_LINK}trending/movie/day${LANGUAGE_PART_OF_API_LINK}`
