import "./MovieList.css";
import Movie from "./Movie";

function MoviesList({movies, catalogTitle, rent, unRent}) {

    return (
        <div>
            <h4 className = "category-title">{catalogTitle}</h4>
            <div className = "movies-list">
                {movies.map((movie) => (
                    <Movie key = {movie.id} movie = {movie} rent = {rent} unRent = {unRent}/>
                ))}
            </div>
        </div>
    );
}

export default MoviesList;
