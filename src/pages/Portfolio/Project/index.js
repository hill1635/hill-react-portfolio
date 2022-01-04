import React from "react";
import "./style.scss";
import projects from "../../../projects.json";

function Project() {
  return (
    <div className="projects col-12 p-0">
      {projects.map((project) => (
        <div className="bg-main col-md-10 col-sm-11 mx-auto mb-5 px-0 text-center">
          <header className="header mx-auto">
            <span className="d-inline-flex">
              <h1 className="element">&lt;h1&gt;</h1>
              <h1 className="p-0 m-0">{project.title}</h1>
              <h1 className="element">&lt;/h1&gt;</h1>
            </span>
          </header>
          <div className="col-6">
            <img
              src={project.img}
              alt={project.title}
              className="project-img img-fluid m-0 p-0"
            ></img>
          </div>
          <div className="linkBox project-body col-3 mx-auto mt-5 p-4">
            <div className="mx-auto col-10 text-left">
              <div className="d-inline-flex">
                <h4 className="object">Links</h4>
                <h4 className="character ml-3">&#123;</h4>
              </div>
              <div className="d-block pl-3">
                <div className="d-block">
                  <p className="string d-inline-block">0: </p>
                  <a
                    className="d-inline-block ml-2"
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
                <div className="d-block">
                  <p className="string d-inline-block">1: </p>
                  <a
                    className="d-inline-block ml-2"
                    href={project.deployed}
                    target="_blank"
                  >
                    Deployed
                  </a>
                </div>
              </div>
              <h4 className="character mb-0">&#125;</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
