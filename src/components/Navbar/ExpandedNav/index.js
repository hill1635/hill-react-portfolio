import React from "react";
import Dropdown from "../Dropdown";
import "./style.css";

function ExpandedNav() {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <div className="bg">
          <a
            href="/about"
            className="nav-link links py-2 px-3 bg-light shadow rounded"
          >
            <span className="link-text">About</span>
          </a>
        </div>
        <div className="bg">
          <a
            href="/portfolio"
            className="nav-link links py-2 px-3 bg-light shadow rounded"
          >
            <span className="link-text">Portfolio</span>
          </a>
        </div>
        <div className="bg">
          <div className="dropdown links py-2 px-3 bg-light shadow rounded">
            <span
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
