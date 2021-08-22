import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Admin, Blog, Dashboard } from "./Components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <Admin
              setLoggedIn={(loggedInStatus) => setIsLoggedIn(loggedInStatus)}
              setSignedInUser={(user) => setSignedInUser(user)} />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              setLoggedIn={(loggedInStatus) => setIsLoggedIn(loggedInStatus)}
              setSignedInUser={(user) => setSignedInUser(user)}
              isLoggedIn={isLoggedIn}
              signedInUser={signedInUser}
            />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
