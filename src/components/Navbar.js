import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation;

  return (
    <header>
      <ul>
        <li>
          <Link to="/" className="breadcrumb-divider">
            Bio
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="breadcrumb-divider">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="breadcrumb-divider">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
