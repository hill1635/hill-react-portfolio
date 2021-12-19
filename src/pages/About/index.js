import React from "react";
import BasicInfo from "./BasicInfo";
import Background from "./Background";
import FunFacts from "./FunFacts";
import Resume from "./Resume";
import "./style.scss";

function About() {
  return (
    <main className="col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-main row col-12 mx-auto">
        <header className="header">
          <span className="d-inline-flex">
            <h1 className="header1">&lt;h1&gt;</h1>
            <h1 className="typedText">Tucker Hill</h1>
            <h1 className="header1">&lt;/h1&gt;</h1>
          </span>
        </header>
        <BasicInfo />
        <Background />
        <div className="commits infoBox col-11 mx-auto p-3 my-4 text-center">
          <h4>Commit History Feed</h4>
          <img
            src="http://ghchart.rshah.org/hill1635"
            alt="GitHub Commit History"
            className="githubHist mx-auto"
          />
          <p>
            *Not as exciting or adorable as a panda cam, but it's the best I can
            do.
          </p>
        </div>
        <FunFacts />
        <Resume />
      </div>
    </main>
  );
}

export default About;
