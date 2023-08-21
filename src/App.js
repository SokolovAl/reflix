import "./style/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home/Home";
import Catalog from "./routes/Catalog/Catalog";
import MovieDetails from "./routes/MovieDetails/MovieDetails";

function App() {
    return (
        <Router>
            <div className = "navbar">
                <NavBar/>
            </div>
            <Routes>
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/catalog/:userId" element = {<Catalog/>}></Route>
                <Route path = "/catalog/:userId/:movieId" element = {<MovieDetails/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
