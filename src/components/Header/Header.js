import React from 'react';
import logo from '../../images/Urban Riders.png'
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container header">
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container-fluid">
                    <h5>Mass <br/> Transit</h5>
                    <div className="d-flex">
                        <ul className="nav">
                            <li className="nav-item">
                               <Link className="nav-link text-dark"  to="/home"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link text-dark" to="/login"> Destination</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact</a>
                            </li>
                                <Link to="/login"><button class="btn btn-success" type="submit">Login</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;