import React from "react";
import Dropdown from "../Dropdown";
import "./style.css";

function ExpandedNav() {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a
          href="/about"
          className="nav-link links mr-lg-5 mr-md-4 py-2 px-3 bg-light shadow rounded"
        >
          <div className="d-inline-block">
            <span className="link-text">About</span>
          </div>
        </a>
        <a
          href="/portfolio"
          className="nav-link links mx-lg-5 mx-md-4 py-2 px-3 bg-light shadow rounded"
        >
          <div className="d-inline-block">
            <span className="link-text">Portfolio</span>
          </div>
        </a>
        <div className="dropdown links mx-lg-5 mx-md-4 py-2 px-3 bg-light shadow rounded">
          <div className="d-inline-block">
            <span
              className="links"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </span>
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedNav;
