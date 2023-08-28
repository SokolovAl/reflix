import {useEffect, useState} from "react";
import {MOVIE_COST} from "../../utils/constants";
import fetchMoviesData from "../../utils/fetchMovieData";
import MoviesList from "../../components/Movie/MoviesList";
import {useParams} from "react-router-dom";
import "./Catalog.css";
import Modal from "../../components/Modal/Modal";

function Catalog() {
    const {userId} = useParams();
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const user = JSON.parse(localStorage[userId]);
    const [budget, setBudget] = useState(user.budget);
    const [topMovieList, setTopMovieList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [rentedMovieName, setRentedMovieName] = useState("");
    const [movieGif, setMovieGif] = useState("");

    const rentedMovies = movies.filter((movie) => movie.isRented === true);

    const updateSearchMovie = (event) => {
        setSearchMovie(event.target.value);
        filterMoviesBasedOnSearch(event.target.value);
    };

    const filterMoviesBasedOnSearch = (searchMovie) => {
        if (searchMovie === "") {
            setMovies(topMovieList);
        } else {
            const filteredMovies = topMovieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchMovie.toLowerCase())
            );
            setMovies(filteredMovies);
        }
    };

    const updateBudget = (updatedBudget) => {
        setBudget(updatedBudget);
        user.budget = updatedBudget;
        localStorage[userId] = JSON.stringify(user);
    };

    const updateMovieRentalStatus = (movieId, isRented) => {
        const moviesCopy = [...movies];
        const movie = moviesCopy.find((movie) => movie.id === movieId);
        movie.isRented = isRented;
        setMovies(moviesCopy);
    };

    const rent = (movieId, movieTitle) => {
        if (budget - MOVIE_COST < 0) {
            alert("Not enough money");
            return;
        }

        user.rentedMoviesIds.push(movieId);
        const updatedBudget = budget - MOVIE_COST;
        updateBudget(updatedBudget);
        updateMovieRentalStatus(movieId, true);
        setRentedMovieName(movieTitle);
        setShowModal(true);
    };

    const unRent = (movieId, movieTitle) => {
        const updatedBudget = budget + MOVIE_COST;
        const movieIndex = user.rentedMoviesIds.findIndex((id) => id === movieId);
        user.rentedMoviesIds.splice(movieIndex, 1);
        updateBudget(updatedBudget);
        updateMovieRentalStatus(movieId, false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetchMoviesData()
            .then((fetchedMovies) => {
                fetchedMovies.forEach((movie) => {
                    movie.isRented = user.rentedMoviesIds.includes(movie.id);
                });
                setMovies(fetchedMovies);
                setTopMovieList(fetchedMovies);
            })
            .catch((error) => {
                console.error("Error fetching movies data:", error);
            });
    }, []);

    return (
        <div>
            <div className = "search-and-budget">
                <input
                    id = "search-input"
                    type = "text"
                    value = {searchMovie}
                    placeholder = "Search"
                    onChange = {updateSearchMovie}
                />
                <span id = "budget">Budget: ${budget.toFixed(2)}</span>
            </div>
            {rentedMovies.length !== 0 ? (
                <MoviesList movies = {rentedMovies} catalogTitle = {"Rented"} rent = {rent} unRent = {unRent}/>
            ) : (
                <></>
            )}
            <MoviesList movies = {movies} catalogTitle = {"Catalog"} rent = {rent} unRent = {unRent}/>
            {showModal && (
                <Modal movieTitle = {rentedMovieName} movieGif = {movieGif} closeModal = {closeModal}/>
            )}
        </div>
    );
}

export default Catalog;
