import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation;

  return (
    <nav class="navbar navbar-expand-lg col-12 mx-auto">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">
          Tucker Hill
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
