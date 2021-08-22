import React from 'react';
import { useHistory } from 'react-router-dom';
const Dashboard = ({ isLoggedIn, signedInUser, setLoggedIn, setSignedInUser }) => {
    const history = useHistory();
    console.log(signedInUser, "signedInUser");
    if (!isLoggedIn) {
        history.push("/index.html");
    }
    const handleLogOut = () => {
        setLoggedIn(false);
        setSignedInUser(null);
        document.getElementById("mainContent").style.display = "block";
        history.push("/index.html");
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