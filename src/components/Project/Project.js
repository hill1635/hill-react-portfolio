import React from "react";
import "./Project.css";
import projects from "../../projects.json";

function Project() {
  return (
    <div className="projects col-12">
      {projects.map((project) => (
        <div className="card col-5 mx-auto mb-4 shadow-sm">
            <img src={project.img} alt={project.title} className="m-0 p-0 border-bottom col-12"></img>
          <div className="card-body text-center p-3">
            <h4>{project.title}</h4>
            <a href={project.github} target="_blank">GitHub</a>
            <i class="fas fa-grip-lines-vertical mx-1"></i>
            <a href={project.deployed} target="_blank">Deployed</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
