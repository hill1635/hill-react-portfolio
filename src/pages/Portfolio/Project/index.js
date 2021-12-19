import React from "react";
import "./style.scss";
import projects from "../../../projects.json";

function Project() {
  return (
    <div className="projects col-12 p-0 rd-15">
      {projects.map((project) => (
        <div className="project-card mx-auto mb-5 px-0 rd-15 shadow">
          <div className="col-12 border-0 bg-transparent px-0 rd-15">
            <img src={project.img} alt={project.title} className="project-img m-0 p-0 rd-15-top"></img>
            <div className="card-body bg-white project-body text-center px-0 rd-15-bottom">
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
