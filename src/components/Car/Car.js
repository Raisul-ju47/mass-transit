import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Car = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div className="container">
            <div className="header">
                <nav className="navbar navbar-light">
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
                                <li className="nav-item"> 
                                    <p className="nav-link text-dark">{loggedInUser.name}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="section d-flex justify-content-between">
                <div className="pickup-form">
                    <p>Pick From</p>
                    <p className="form-input">Mirpur-1</p>
                    <p>Pick To</p>
                    <p className="form-input">Dhanmondi</p>
                    <button className="button">Search</button>
                </div>
                <div>
                    <iframe className="map"  title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70031187697!2d90.34510368647247!3d23.794582086878577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616264894144!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Car;