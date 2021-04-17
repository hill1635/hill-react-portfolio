import React from "react";
import "./Project.css";
import projects from "../../projects.json";

function Project() {
  return (
    <div className="projects col-12">
      {projects.map((project) => (
        <div className="card mx-auto mb-4 shadow-sm">
          <img src={project.img} alt={project.title} className="card-img-top"></img>
          <hr className="solid w-100"></hr>
          <div className="card-body text-center p-1">
            <h4>{project.title}</h4>
            <a href={project.github} target="_blank">GitHub</a>
            <a href={project.deployed} target="_blank">Deployed</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
