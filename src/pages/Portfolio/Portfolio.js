import React from "react";
import Project from "./Project/Project.js";
import "./Portfolio.css";
import Sidebar from "../../components/Sidebar/Sidebar.js";

function Portfolio() {
  return (
    <div>
      {/* <aside className="float-left">
        <Sidebar />
      </aside> */}
      <main className="col-9 mt-5 pt-2 content">
          <Project />
      </main>
    </div>
  );
}

export default Portfolio;
