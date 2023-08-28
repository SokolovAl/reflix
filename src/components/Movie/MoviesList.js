import "./MovieList.css";
import Movie from "./Movie";

function MoviesList({movies, catalogTitle, rent, unRent}) {

    return (
        <div>
            <h4 className = "category-title">{catalogTitle}</h4>
            <div className = "movies-list">
                {movies.map((movie) => (
                    <Movie key = {movie.id} movie = {movie} rent = {() => rent(movie.id, movie.title)}
                           unRent = {() => unRent(movie.id, movie.title)}/>
                ))}
            </div>
        </div>
    );
}

export default MoviesList;
