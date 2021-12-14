import React from "react";
import "./style.css";
import ExpandedNav from "./ExpandedNav";
import CollapsedNav from "./CollapsedNav";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md col-12 pt-4">
      <a href="/">
        <span className="name shadow-lg">
          <span className="first col-12">
            TUCKER
          </span>
          <hr className="divider"></hr>
          <span className="last col-12">HILL</span>
        </span>
      </a>
      <div className="container container-fluid col-6">
        <ExpandedNav/>
        <CollapsedNav/>
      </div>
    </nav>
  );
}

export default Navbar;
