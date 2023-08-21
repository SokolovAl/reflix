import {useEffect, useState} from "react";
import {MOVIE_COST} from "../utils/constants";
import fetchMoviesData from "../utils/fetchMovieData";
import MoviesList from "../components/MoviesList";
import {useParams} from "react-router-dom";
import "../style/Catalog.css";

function Catalog() {
    const {userId} = useParams();
    const user = JSON.parse(localStorage[userId]);
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const [budget, setBudget] = useState(user.budget);
    const [topMovieList, setTopMovieList] = useState([]);

    let rentedMovies = movies.filter((movie) => movie.isRented === true);

    const getUserRentedMovies = (rentedMoviesIds, movies) => {
        movies.forEach((movie) => {
            movie.isRented = rentedMoviesIds.includes(movie.id);
        });
    };

    const updateSearchMovie = (event) => {
        setSearchMovie(event.target.value);
        filterMoviesBasedOnSearch(event.target.value);
    };

    const filterMoviesBasedOnSearch = (searchMovie) => {
        if (searchMovie === "") {
            setMovies(topMovieList);
        } else {
            let filteredMovies = topMovieList.filter((movie) =>
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
        let moviesCopy = [...movies];
        let movie = moviesCopy.find((movie) => movie.id === movieId);
        movie.isRented = isRented;
        setMovies(moviesCopy);
    };

    const rent = (movieId) => {
        if (budget - MOVIE_COST < 0) {
            alert("There are insufficient funds");
            return;
        }
        user.rentedMoviesIds.push(movieId);
        let updatedBudget = budget - MOVIE_COST;
        updateBudget(updatedBudget);
        updateMovieRentalStatus(movieId, true);
    };

    const unRent = (movieId) => {
        let updatedBudget = budget + MOVIE_COST;
        let movieIndex = user.rentedMoviesIds.findIndex((id) => id === movieId);
        user.rentedMoviesIds.splice(movieIndex, 1);
        updateBudget(updatedBudget);
        updateMovieRentalStatus(movieId, false);
    };

    useEffect(() => {
        fetchMoviesData()
            .then((fetchedMovies) => {
                getUserRentedMovies(user.rentedMoviesIds, fetchedMovies);
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
                <input id = "search-input" type = "text" value = {searchMovie} placeholder = "Search"
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
        </div>
    );
}

export default Catalog;
