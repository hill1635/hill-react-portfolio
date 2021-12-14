import React from "react";
import "./style.css";

function CollapsedNav() {
    return (
        <div className="collapsedNav">
        <a href="/about">
          <button
            className="navbar-toggler menu-btn rounded-circle homeBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-home"></i>
          </button>
        </a>
        <a href="/portfolio">
          <button
            className="navbar-toggler rounded-circle menu-btn portfolioBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-book-open"></i>
          </button>
        </a>
        {/* Fix to utilize dropdown. */}
        <a href="/contact">
          <button
            className="navbar-toggler rounded-circle menu-btn contactBtn text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-info-circle"></i>
          </button>
        </a>
        </div>
    );
}

export default CollapsedNav;