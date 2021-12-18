import React from "react";
import "./style.css";

function Dropdown() {
  return (
    <div className="dropdown-menu dropdown-menu-right border border-dark" aria-labelledby="dropdownMenuButton1">
      <ul className="list-group list-group-horizontal list-unstyled">
        <li>
          <a target="_blank" href="https://www.facebook.com/tucker.hill.75/">
            <img src="./icons/facebook.svg" className="icon-fb rounded"></img>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tucker-hill-5254b979/"
          >
            <img src="./icons/linkedin.svg" className="icon rounded"></img>
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:hill1635@gmail.com">
            <img src="./icons/gmail.svg" className="icon rounded"></img>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.github.com/hill1635">
            <img src="./icons/github.svg" className="icon rounded"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
