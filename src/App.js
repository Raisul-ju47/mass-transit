import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Bike from "./components/Bike/Bike";
import Car from "./components/Car/Car";
import Bus from "./components/Bus/Bus";
import Train from "./components/Train/Train";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
          <PrivateRoute path="/login">
            <Login/>
          </PrivateRoute>
          <PrivateRoute path="/bike">
            <Bike/>
          </PrivateRoute>
          <PrivateRoute path="/car">
            <Car/>
          </PrivateRoute>
          <PrivateRoute path="/bus">
            <Bus/>
          </PrivateRoute>
          <PrivateRoute path="/train">
            <Train/>
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
