import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation;

  return (
    <nav className="navbar navbar-expand-lg col-12 mx-auto bg-dark">
      <div className="container-fluid col-12">
        <span className="navbar-brand" href="#">
          Tucker Hill
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className="nav-link text-white">
              Bio
            </Link>
            <Link to="/portfolio" className="nav-link text-white">
              Portfolio
            </Link>
            <Link to="/contact" className="nav-link text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
