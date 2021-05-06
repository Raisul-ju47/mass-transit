import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Home.css';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';
import fakeData from '../../components/fakeData/fakeData.json';
import Transit from '../Transit/Transit';

const Home = () => {
    
    const transitList = fakeData;
    const [transits, setTransits] = useState(transitList);

   

    return (
        <div className="home">
            <Header/>
            <div className="container mt-5 tickets">
                <div className="row d-flex justify-content-between tickets" to="/booking/${id}" >
                    {
                        transits.map(transit => <Transit key={transit.id} transit={transit}></Transit>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;