import React,{ useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Admin = ({ setLoggedIn, setSignedInUser }) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email,
            password
        }
        axios.post("http://localhost:4000/login", {
            ...data
        }).then(responseData => {
            console.log(responseData, "responseData");
            setLoggedIn(true);
            setSignedInUser(responseData.data);
            history.push("/dashboard");
        }).catch(err => {
            console.log(err.message);
        });
    }
    return (
        <div className="admin-main">
            <div className="login-form-container">
                <h1> Admin Login </h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" value={email} pattern="/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/gm" onChange={(e) => setEmail(e.target.value)} placeholder="e.g. username@domainName.domain" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="e.g. super secret one" />
                    </div>
                    <input className="submitField" type="submit" value="Log me In" />
                </form>
            </div>
        </div>
    )
}

export default Admin;
