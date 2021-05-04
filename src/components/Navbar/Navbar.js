import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const scrollLength = 100;
  var opacity = "";

  window.addEventListener("scroll", () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition <= scrollLength) {
      opacity = 1 - currentPosition / scrollLength;
    } else {
      opacity = 0;
    }
    document.querySelector(".navbar").style.opacity = opacity;
  });

  return (
    <div className="wrapper col-12 p-3">
      <nav className="navbar navbar-expand-lg col-12 shadow-lg pt-2 pb-1 rounded-top">
        <div className="container container-fluid col-12">
          <span className="name mr-3">Tucker Hill</span>
          <button
            className="navbar-toggler border border-solid rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-right menu-btn"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="links navbar-nav">
              <Link to="/" className="nav-link text-white">
              <i class="fas fa-angle-right mr-1 b-icon"></i>About
              </Link>
              <Link to="/portfolio" className="nav-link text-white">
              <i class="fas fa-angle-right mr-1 p-icon"></i>Portfolio
              </Link>
              <Link to="/contact" className="nav-link text-white">
                <i class="fas fa-angle-right mr-1 c-icon"></i>Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="nav-border rounded-bottom"></div>
    </div>
  );
}

export default Navbar;
