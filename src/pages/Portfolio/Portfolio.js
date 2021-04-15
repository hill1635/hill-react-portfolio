import React from "react";
import Project from "../../components/Project/Project.js";
import "./Portfolio.css";

function Portfolio() {
  return (
    <main className="portfolio">
      <h1>Portfolio</h1>
      <hr className="solid"></hr>
      <div className="icons">
        <img src="./icons/star.svg"></img>
        <img src="./icons/bootstrap.svg"></img>
        <img src="./icons/javascript.svg"></img>
        <img src="./icons/jquery.svg"></img>
        <img src="./icons/nodejs.svg"></img>
        <img src="./icons/react.svg"></img>
        <img src="./icons/mongodb.svg"></img>
        <img src="./icons/mysql.svg"></img>
      </div>
      <div>
        <Project />
      </div>
    </main>
  );
}

export default Portfolio;
