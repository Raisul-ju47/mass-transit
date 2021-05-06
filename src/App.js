import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";

export const UserContext = createContext();

function App() {

  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: ''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser], [newUser, setNewUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <PrivateRoute path="/booking/:bookingId">
            <Booking/>
          </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
