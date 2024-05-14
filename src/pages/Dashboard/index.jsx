import {useSelector} from "react-redux";

const Dashboard = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div>
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}</p>
                    <p>username: {user.username}</p>
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default Dashboard
