import "../style/User.css";

function User({user}) {
    return (
        <div className = "user-box" style = {{backgroundColor: user.color}}>
            <span className = "user-name">{user.name}</span>
        </div>
    );
}

export default User;
