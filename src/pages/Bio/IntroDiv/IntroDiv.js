import React from "react";
import "./IntroDiv.css";

function IntroDiv() {
  return (
    <div className="row col-xs-12 col-sm-7 mt-5 mx-auto">
      <div className="bg-intro col-12 mx-auto shadow-lg p-0">
        <div className="text-center">
          <div className="hello bg-light p-3 mb-5 shadow-lg">
            <h1 className="helloText bg-light">'Hello World!'</h1>
          </div>
          <div className="clearfix">
          <div className="biopic bg-transparent d-inline-block col-8 float-left">
            <img
              src="./images/me.jpeg"
              className="rounded-circle shadow-lg"
            ></img>
          </div>
          <div className="intro bg-light d-inline-block shadow-lg col-6 float-right">
            <p>
              My name is Tucker and I'm a full-stack developer.
            </p>
          </div>
          </div>
          <div className="learnMore bg-light w-25">
            <span className="next mt-4 d-block">
              <p className="intro">Learn more.</p>
              <i class="fas fa-chevron-down arrow"></i>
              <i class="fas fa-chevron-down arrow"></i>
              <i class="fas fa-chevron-down arrow"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroDiv;
