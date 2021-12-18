import React from "react";
import "./style.css";

function Dropdown() {
  return (
    <div className="dropdown-menu dropdown-menu-right border border-dark" aria-labelledby="dropdownMenuButton1">
      <ul className="list-unstyled">
        <li>
          <a className="contact-link" target="_blank" href="https://www.facebook.com/tucker.hill.75/">
            <img src="./icons/facebook.svg" className="dropdown-icon-fb rounded"></img>
            Facebook
          </a>
        </li>
        <li>
          <a className="contact-link"
            target="_blank"
            href="https://www.linkedin.com/in/tucker-hill-5254b979/"
          >
            <img src="./icons/linkedin.svg" className="dropdown-icon rounded"></img>
            LinkedIn
          </a>
        </li>
        <li>
          <a className="contact-link" target="_blank" href="mailto:hill1635@gmail.com">
            <img src="./icons/gmail.svg" className="dropdown-icon rounded"></img>
            Gmail
          </a>
        </li>
        <li>
          <a className="contact-link" target="_blank" href="https://www.github.com/hill1635">
            <img src="./icons/github.svg" className="dropdown-icon rounded"></img>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
