import React from "react";
import "./style.scss";
import ExpandedNav from "./ExpandedNav";
import CollapsedNav from "./CollapsedNav";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <a className="name" href="/">
        <span>
          <span className="first col-12">
            TUCKER
          </span>
          <div className="divider"></div>
          <span className="last col-12">HILL</span>
        </span>
      </a>
      <div className="container container-fluid">
        <ExpandedNav/>
        <CollapsedNav/>
      </div>
    </nav>
  );
}

export default Navbar;
