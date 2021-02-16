import React from "react";
import projects from "../projects.json";

function Project() {
  return (
    <div>
      {projects.map((project) => (
        <div className="projectCard">
          <img src={project.img} alt={project.title}></img>
            <hr className="solid"></hr>
            <h4>{project.title}</h4>
            <a href={project.github} target="_blank">GitHub</a>
            <a href={project.deployed} target="_blank">Deployed</a>
        </div>
      ))
      }
    </div>
  );
}

export default Project;
