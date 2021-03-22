import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header">
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
                   <Link to="/login"><button class="btn btn-primary">Login</button></Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
