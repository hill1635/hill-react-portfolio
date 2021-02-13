import React from "react";
import projects from "../projects.json";

function Project() {
  return (
    <div>
      {projects.map((project) => (
        <div>
            <h3>{project.title}</h3>
            <p>Github: <a href={project.github} target="_blank">{project.github}</a></p>
            <p>Deployed: <a href={project.deployed} target="_blank">{project.deployed}</a></p>
        </div>
      ))}
    </div>
  );
}

export default Project;
