import React from "react";
import BasicInfo from "./BasicInfo";
import Background from "./Background";
import FunFacts from "./FunFacts";
import "./style.css";

function About() {
  return (
    <main className="col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-about row col-12 mx-auto shadow-lg p-0 rounded">
        <div className="header bg-light p-3 mb-5 shadow-lg rounded mx-auto">
          <h1 className="typedText bg-light">Tucker Hill</h1>
        </div>
        <BasicInfo/>
        <Background/>
        <FunFacts/>
      </div>
    </main>
  );
}

export default About;
