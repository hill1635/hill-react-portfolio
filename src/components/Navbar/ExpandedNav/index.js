import React from "react";
import Dropdown from "../Dropdown";
import "./style.scss";

function ExpandedNav() {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="w-100">
        <div className="float-right">
            <a
              href="/about"
              className="nav-link links d-inline py-2 px-3"
            >
              <span className="link-text">&lt;About/&gt;</span>
            </a>
            <a
              href="/portfolio"
              className="nav-link links d-inline py-2 px-3"
            >
              <span className="link-text">&lt;Portfolio/&gt;</span>
            </a>
            <div className="dropdown links d-inline py-2 px-3">
              <span data-bs-toggle="dropdown" aria-expanded="false">
                &lt;Contact/&gt;
              </span>
              <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedNav;
