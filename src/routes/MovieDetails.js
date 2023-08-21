import {useParams} from "react-router-dom";
import "../style/MovieDetails.css";
import fetchMovieDetailsData from "../utils/fetchMovieDetailsData";
import fetchMovieTrailer from "../utils/fetchMovieTrailer";
import {useEffect, useState} from "react";
import {YOUTUBE_LINK} from "../utils/constants";

function MovieDetails() {
    const {movieId} = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [officialTrailer, setOfficialTrailer] = useState("");

    useEffect(() => {
        fetchMovieDetailsData(movieId)
            .then((data) => {
                setSelectedMovie(data);
                fetchMovieTrailer(movieId)
                    .then(trailer => {
                        setOfficialTrailer(trailer);
                    })
                    .catch(error => {
                        console.error("Error fetching movie trailer:", error);
                    });
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
            {officialTrailer && (
                <iframe
                    width = "560"
                    height = "315"
                    src = {`${YOUTUBE_LINK}${officialTrailer.key}`}
                    title = "YouTube video player"
                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            )}
            <p>{selectedMovie.description}</p>
        </div>
    );
}

export default MovieDetails;
