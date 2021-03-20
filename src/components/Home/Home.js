import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Home.css';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="tickets container">
                <Link className="ticket" to="/bike" >
                    <img src={bike} alt=""/>
                    <h2 className="text-dark">Bike</h2>
                </Link>
                <Link className="ticket" to="/car">
                    <img src={car} alt=""/>
                    <h2 className="text-dark">Car</h2>
                </Link>
                <Link className="ticket" to="/bus">
                    <img src={bus} alt=""/>
                    <h2 className="text-dark">Bus</h2>
                </Link>
                <Link className="ticket" to="/train">
                    <img src={train} alt=""/>
                    <h2 className="text-dark">Train</h2>
                </Link>
            </div>
        </div>
    );
};

export default Home;