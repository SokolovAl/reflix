import "../style/UserList.css";
import {Link} from "react-router-dom";
import User from "./User";
import {BUDGET} from "../utils/constants";

function UsersList({users}) {
    return (
        <div className = "container">
            <h2>WHO'S WATCHING?</h2>
            <div className = "users-container">
                {users.map((user) => {
                    let savedUser = localStorage[user.id];

                    if (!savedUser) {
                        localStorage.setItem(
                            user.id,
                            JSON.stringify({budget: BUDGET, rentedMoviesIds: []})
                        );
                    }

                    return (
                        <Link key = {user.id} to = {`/catalog/${user.id}`}>
                            <User key = {user.id} user = {user}/>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default UsersList;
