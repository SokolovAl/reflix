import {useParams} from "react-router-dom";
import "./MovieDetails.css";
import fetchMovieDetailsData from "../../utils/fetchMovieDetailsData";
import fetchMovieTrailer from "../../utils/fetchMovieTrailer";
import {useEffect, useState} from "react";
import {YOUTUBE_LINK} from "../../utils/constants";

function MovieDetails() {
    const {movieId} = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [officialTrailerKey, setOfficialTrailerKey] = useState("");

    useEffect(() => {
        fetchMovieDetailsData(movieId)
            .then((data) => {
                setSelectedMovie(data);
                fetchMovieTrailer(movieId)
                    .then(key => {
                        setOfficialTrailerKey(key);
                    })
                    .catch(error => {
                        console.error("Error fetching movie trailer:", error);
                    });
            })
            .catch((error) => {
                console.error("Error fetching movie data:", error);
            });
    }, []);

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    return (
        <div className = "container">
            <h3>{selectedMovie.title} ({selectedMovie.year})</h3>
            <img src = {selectedMovie.img} alt = {selectedMovie.title}/>
            <iframe src = {`${YOUTUBE_LINK}${officialTrailerKey}`}></iframe>
            <p>{selectedMovie.description}</p>
        </div>
    );
}

export default MovieDetails;
