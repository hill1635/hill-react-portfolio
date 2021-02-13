import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation;

    return (
        <ul>
            <li>
                <Link to="/" className={location.pathname === "/"}>
                    Bio
                </Link>
            </li>
            <li>
                <Link to="/portfolio" className={location.pathname === "/portfolio"}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="/contact" className={location.pathname === "/contact"}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;