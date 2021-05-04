import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="wrapper p-3">
      <div className="footer-border rounded-top"></div>
      <footer className="footer col-12 pt-1 pb-3 rounded-bottom">
        <p className="copywrite mt-2 mb-0">©Tucker Hill</p>
        <a target="_blank" href="https://www.github.com/hill1635"><img src="./icons/github.svg" className="icon"></img></a>
        <a target="_blank" href="https://www.facebook.com/tucker.hill.75/"><img src="./icons/facebook.svg" className="icon-fb"></img></a>
        <a target="_blank" href="https://www.linkedin.com/in/tucker-hill-5254b979/"><img src="./icons/linkedin.svg" className="icon"></img></a>
        <a target="_blank" href="mailto:hill1635@gmail.com"><img src="./icons/gmail.svg" className="icon"></img></a>
      </footer>
      </div>
  );
}

export default Footer;
