import UsersList from "../../components/User/UsersList";
import usersData from "../../data/usersData";

function Home() {
    const users = usersData;
    return <UsersList users = {users}/>;
}

export default Home;
