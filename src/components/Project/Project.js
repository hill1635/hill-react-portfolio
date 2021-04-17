import React from "react";
import "./Project.css";
import projects from "../../projects.json";

function Project() {
  return (
    <div className="col-12">
      {projects.map((project) => (
        <div className="card w-25 m-5 shadow-sm float-left">
          <img src={project.img} alt={project.title} className="card-img-top"></img>
          <hr className="solid w-100"></hr>
          <div className="card-body p-4">
            <h3>{project.title}</h3>
            <a href={project.github} target="_blank">GitHub</a>
            <a href={project.deployed} target="_blank">Deployed</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
