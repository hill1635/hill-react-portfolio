import React from "react";
import "./Project.css";
import projects from "../../projects.json";

function Project() {
  return (
    <div className="projects col-12">
      {projects.map((project) => (
        <div className="project-card col-lg-5 col-sm-12 mx-auto mb-5 shadow-sm px-0">
          <div className="card col-12 border-0 bg-transparent px-0">
              <img src={project.img} alt={project.title} className="project-img m-0 p-0 border-bottom"></img>
            <div className="card-body bg-white project-body text-center px-0">
              <h4>{project.title}</h4>
              <a href={project.github} target="_blank">GitHub</a>
              <i class="fas fa-grip-lines-vertical mx-1"></i>
              <a href={project.deployed} target="_blank">Deployed</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
