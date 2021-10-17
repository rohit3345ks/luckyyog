import React from 'react';
import { useHistory } from 'react-router-dom';
const Dashboard = ({ isLoggedIn, signedInUser, setLoggedIn, setSignedInUser }) => {
    const history = useHistory();
    if (!isLoggedIn) {
        history.push("/");
    }
    const handleLogOut = () => {
        setLoggedIn(false);
        setSignedInUser(null);
        localStorage.clear();
        document.getElementById("mainContent").style.display = "block";
        history.push("/");
    }

    return (
        <div>
            <h2>The Dashboard</h2>
            <h2>Logged In User: {signedInUser?.username ?? ""} </h2>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Dashboard;
;