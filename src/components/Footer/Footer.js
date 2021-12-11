import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="col-12">
      <a target="_blank" href="https://www.facebook.com/tucker.hill.75/">
        <img src="./icons/facebook.svg" className="icon-fb rounded"></img>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/tucker-hill-5254b979/">
        <img src="./icons/linkedin.svg" className="icon rounded"></img>
      </a>
      <a target="_blank" href="mailto:hill1635@gmail.com">
        <img src="./icons/gmail.svg" className="icon rounded"></img>
      </a>
      <a target="_blank" href="https://www.github.com/hill1635">
        <img src="./icons/github.svg" className="icon rounded"></img>
      </a>
    </footer>
  );
}

export default Footer;
