import logo from "../REFLIX.png";
import {Link, useLocation} from "react-router-dom";
import "../style/Navbar.css";

function NavBar() {
    const location = useLocation();
    let locationPath = location.pathname;

    locationPath = locationPath.split("/");

    if (locationPath.length > 3) {
        locationPath.pop();
    }

    return (
        <div className = "navbar">
            <Link to = "/">
                <div className = "navbar-item">Home</div>
            </Link>
            <Link to = {`${locationPath.join("/")}`}>
                <div className = "navbar-item">Catalog</div>
            </Link>
            <div className = "navbar-item" id = "logo">
                <img src = {logo} alt = {"logo"}/>
            </div>
        </div>
    );
}

export default NavBar;
