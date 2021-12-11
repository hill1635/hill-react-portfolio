import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md col-12 pt-4">
      <Link to="/">
        <span className="name shadow-sm py-2 px-3 shadow-lg rounded position-absolute">
          <span className="first col-12 d-block text-center m-0 p-0">
            TUCKER
          </span>
          <hr className="col-7 my-0 mx-auto divider"></hr>
          <span className="last col-12 d-block text-center m-0 p-0">HILL</span>
        </span>
      </Link>
      <div className="container container-fluid col-6">
        <Link to="/about">
          <button
            className="navbar-toggler menu-btn rounded-circle homeBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-home"></i>
          </button>
        </Link>
        <Link to="/portfolio">
          <button
            className="navbar-toggler rounded-circle menu-btn portfolioBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-book-open"></i>
          </button>
        </Link>
        <Link to="/contact">
          <button
            className="navbar-toggler rounded-circle menu-btn contactBtn text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-info-circle"></i>
          </button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <Link
              to="/about"
              className="nav-link links mr-lg-5 mr-md-4 py-2 px-3 bg-light shadow rounded"
            >
              <div className="d-inline-block">
                <span className="link-text">About</span>
                <div className="underline u-about"></div>
              </div>
            </Link>
            <Link
              to="/portfolio"
              className="nav-link links mx-lg-5 mx-md-4 py-2 px-3 bg-light shadow rounded"
            >
              <div className="d-inline-block">
                <span className="link-text">Portfolio</span>
                <div className="underline u-portfolio"></div>
              </div>
            </Link>
            <div className="dropdown links mx-lg-5 mx-md-4 py-2 px-3 bg-light shadow rounded">
              <div className="d-inline-block">
                <span className="links" data-bs-toggle="dropdown" aria-expanded="false">Contact</span>
                <div className="underline u-contact"></div>
                <ul className="dropdown-menu list-group list-group-horizontal" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/tucker.hill.75/">
                      <img src="./icons/facebook.svg" className="icon-fb rounded"></img>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/in/tucker-hill-5254b979/">
                      <img src="./icons/linkedin.svg" className="icon rounded"></img>
                    </a>  
                  </li>
                  <li>
                    <a target="_blank" href="mailto:hill1635@gmail.com">
                      <img src="./icons/gmail.svg" className="icon rounded"></img>
                    </a>  
                  </li>
                  <li>
                    <a target="_blank" href="https://www.github.com/hill1635">
                      <img src="./icons/github.svg" className="icon rounded"></img>
                    </a>  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
