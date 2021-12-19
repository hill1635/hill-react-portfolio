import React from "react";
import BasicInfo from "./BasicInfo";
import Background from "./Background";
import FunFacts from "./FunFacts";
import Resume from "./Resume";
import "./style.scss";

function About() {
  return (
    <main className="col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-about row col-12 mx-auto shadow-lg p-0 rounded">
        <div className="header bg-light p-3 mb-5 shadow-lg rounded mx-auto">
          <h1 className="typedText bg-light">Tucker Hill</h1>
        </div>
        <BasicInfo/>
        <Background/>
        <div className="commits col-11 mx-auto bg-light rounded p-3 shadow-lg my-4 text-center">
          <h4>Commit History Feed</h4>
        <img src="http://ghchart.rshah.org/hill1635" alt="GitHub Commit History" className="mx-auto"/>
        <p>*Not as exciting or adorable as a panda cam, but it's the best I can do.</p>
        </div>
        <FunFacts/>
        <Resume/>
      </div>
    </main>
  );
}

export default About;
