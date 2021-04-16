import React from "react";
import Project from "../../components/Project/Project.js";
import "./Portfolio.css";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function Portfolio() {
  return (
    <div>
      <aside className="float-left">
        <Sidebar />
      </aside>
      <main className="portfolio">
        <h1>Portfolio</h1>
        <hr className="solid"></hr>
        <div>
          <Project />
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
