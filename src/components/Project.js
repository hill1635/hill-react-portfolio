import React from "react";
import projects from "../projects.json";

function Project() {
  return (
    <div>
      {projects.map((project) => (
        <div>
            <h1>{project.title}</h1>
            <p>{project.github}</p>
            <p>{project.deployed}</p>
        </div>
      ))}
    </div>
  );
}

export default Project;
