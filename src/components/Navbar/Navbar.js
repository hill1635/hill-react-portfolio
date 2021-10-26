import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const scrollLength = 525;
  var opacity = "";

  window.addEventListener("scroll", () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition <= scrollLength) {
      opacity = 1 - currentPosition / scrollLength;
    } else {
      opacity = 0;
    }
    document.querySelector(".name").style.opacity = opacity;
  });

  return (
      <nav className="navbar navbar-expand-lg col-12 pt-4 pb-2 mb-5">
        <span className="name position-fixed shadow-sm mt-2">
          <span className="col-12 initial-t">T</span>
          <span className="col-12 initial-h">H</span>
        </span>
        <div className="container container-fluid col-12">
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
            <div class="links navbar-nav mx-auto">
              <Link to="/" className="nav-link mr-5">
              <i className="fas fa-angle-right mr-1 b-icon"></i>
              <div className="d-inline-block">
              <span className="link-text">About</span>
              <div className="underline u-about"></div>
              </div>
              </Link>
              <Link to="/portfolio" className="nav-link mx-5">
              <i className="fas fa-angle-right mr-1 p-icon"></i>
              <div className="d-inline-block">
              <span className="link-text">Portfolio</span>
              <div className="underline u-portfolio"></div>
              </div>
              </Link>
              <Link to="/contact" className="nav-link ml-5">
                <i className="fas fa-angle-right mr-1 c-icon"></i>
                <div className="d-inline-block">
                <span className="link-text">Contact</span>
                <div className="underline u-contact"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
