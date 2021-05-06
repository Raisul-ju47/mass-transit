import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../../App';
import './Booking.css';
import BikeImage from '../../images/Frame.png';
import People from '../../images/peopleicon.png'
import fakeData from '../fakeData/fakeData.json';



const Booking = () => {


    const {bookingId} = useParams();
    


    const url = fakeData;
    const transitDetails = url.filter(trans => trans.id === bookingId)
    console.log(transitDetails);

    // const transitDetails = url.filter(transit=> transit.id === bookingId);
    // const {name, image} = transitDetails[0];
    // console.log(name)



    const [newUser, setNewUser] = useContext(UserContext);


    const showHtmlDiv = () => {
        const htmlShow = document.getElementById("html-show");
        if (htmlShow.style.display === "none") {
            htmlShow.style.display = "block";
        }
        else {
            htmlShow.style.display = "none";
        }
    }


    return (
        <div className="container">
            <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Mass Transit
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <Link to="/home"><a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login">
                    <a class="nav-link" href="#">
                        Destination
                    </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    {newUser.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </div>

            <div>
                <div className="section">
                    <div className="pickup-form">
                        <p>Pick From</p>
                        <p className="form-input">Mirpur-1</p>
                        <p>Pick To</p>
                        <p className="form-input">Dhanmondi</p>
                        <button onClick={showHtmlDiv} className="button">Search</button>
                    </div>
                    <div>
                        <iframe className="map"  title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.70031187697!2d90.34510368647247!3d23.794582086878577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616264894144!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="pickup-form-2 destination" id="html-show">
                    <div style={{backgroundColor: "#FF6E40", width: "95%", height: "110px", borderRadius: "10px", padding: "15px 0px 0px 20px"}}>
                        <h5 style={{color: "white"}}>Mirpur-1</h5>
                        <br/>
                        <h5 style={{color: "white"}}>Dhanmondi</h5>
                    </div>
                    {/* <div style={{backgroundColor: "white", width: "95%", height: "60px", borderRadius: "10px", padding: "0px 0px 0px 10px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                        <img style={{width: "40px", height: "30px"}} src={image} alt=""/>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "40%"}}>
                            <p style={{paddingTop: "13px"}}>{name}</p>
                            <img style={{width: "20px", height: "20px"}} src={People} alt=""/>
                            <p style={{paddingTop: "13px"}}>4</p>
                        </div>
                        <p style={{paddingTop: "13px"}}>$67</p>
                    </div> */}
                    {/* <div style={{backgroundColor: "white", width: "95%", height: "60px", borderRadius: "10px", padding: "0px 0px 0px 10px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                        <img style={{width: "40px", height: "30px"}} src={image} alt=""/>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "40%"}}>
                            <p style={{paddingTop: "13px"}}>{name}</p>
                            <img style={{width: "20px", height: "20px"}} src={People} alt=""/>
                            <p style={{paddingTop: "13px"}}>4</p>
                        </div>
                        <p style={{paddingTop: "13px"}}>$67</p>
                    </div> */}
                    {/* <div style={{backgroundColor: "white", width: "95%", height: "60px", borderRadius: "10px", padding: "0px 0px 0px 10px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                        <img style={{width: "40px", height: "30px"}} src={image} alt=""/>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", width: "40%"}}>
                            <p style={{paddingTop: "13px"}}>{name}</p>
                            <img style={{width: "20px", height: "20px"}} src={People} alt=""/>
                            <p style={{paddingTop: "13px"}}>4</p>
                        </div>
                        <p style={{paddingTop: "13px"}}>$67</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Booking;