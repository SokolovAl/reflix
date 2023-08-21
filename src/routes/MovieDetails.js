import {useParams} from "react-router-dom";
import "../style/MovieDetails.css";
import fetchMovieDetailsData from "../utils/fetchMovieDetailsData";
import {useEffect, useState} from "react";

function MovieDetails() {
    const {movieId} = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetchMovieDetailsData(movieId)
            .then((data) => {
                setSelectedMovie(data);
            })
            .catch((error) => {
                console.error("Error fetching movie data:", error);
            });
    }, [movieId]);

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    return (
        <div className = "container">
            <h3>
                {selectedMovie.title} ({selectedMovie.year})
            </h3>
            <img src = {selectedMovie.img} alt = {selectedMovie.title}/>
            <p>{selectedMovie.description}</p>
        </div>
    );
}

export default MovieDetails;
