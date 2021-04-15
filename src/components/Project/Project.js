import React from "react";
import "./Project.css";
import projects from "../../projects.json";

function Project() {
  return (
    <div>
      {projects.map((project) => (
        <div className="projectCard">
          <div className="cardHeader pt-3">
            <h3>{project.title}</h3>
          </div>
          <div className="cardBody p-4">
            <img src={project.img} alt={project.title} className="shadow-sm"></img>
            <hr className="solid"></hr>
            <a href={project.github} target="_blank">GitHub</a>
            <a href={project.deployed} target="_blank">Deployed</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
