import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Admin = ({ setLoggedIn, setSignedInUser, isLoggedIn }) => {
    const history = useHistory();
    if (isLoggedIn) {
        history.push("/dashboard");
    }
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
            setLoggedIn(true);
            setSignedInUser(responseData.data.data);
            localStorage.setItem('authToken', responseData.data.authToken);
            localStorage.setItem('signedInUser', JSON.stringify(responseData.data.data));
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
                        <input type="email" id="email" value={email} pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" title="Please enter a valid email" onChange={(e) => setEmail(e.target.value)} placeholder="username@domainName.domain" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Please enter min. 8 letters with one lowercase, one uppercase and one number" onChange={(e) => setPassword(e.target.value)} placeholder="e.g. super secret one" />
                    </div>
                    <input className="submitField" type="submit" value="Log me In" />
                </form>
            </div>
        </div>
    )
}

export default Admin;