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
            <div className='dashboard-header'>
                <h2 className='dashboard-header-heading'> 👋 <span style={{fontWeight: "bold"}}>{signedInUser?.username ?? ""}</span>, here you can manage your blogs </h2>
                <button className="logout-button" onClick={handleLogOut}>Log Out</button>
            </div>
            <div className="blog-card" onClick={()=>{history.push('/blog')}}>
                <span>Blogs</span>
            </div>
        </div>
    )
}

export default Dashboard;
;