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
      <main>
        <h1 className="pl-4 header">Portfolio.</h1>
        <hr className="solid ml-4 w-50"></hr>
        <div className="content">
          <Project />
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
