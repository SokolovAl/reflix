import "./Movie.css";
import {Link, useLocation} from "react-router-dom";

function Movie({movie, rent, unRent}) {
    const location = useLocation();

    return (
        <div className = "movie-box">
            <Link to = {`${location.pathname}/${movie.id}`} relative = "path">
                <img className = "movie-img" src = {movie.img} alt = {movie.title}/>
            </Link>
            {movie.isRented ? (
                <i onClick = {() => unRent(movie.id)} className = "material-icons icon">
                    remove_circle
                </i>
            ) : (
                <i onClick = {() => rent(movie.id)} className = "material-icons icon">
                    add_circle
                </i>
            )}
        </div>
    );
}

export default Movie;
