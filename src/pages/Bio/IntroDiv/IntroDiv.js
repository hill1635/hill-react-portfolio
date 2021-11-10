import React from "react";
import "./IntroDiv.css";

function IntroDiv() {
  return (
    <div className="row col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-intro col-12 mx-auto shadow-lg p-0 rounded">
        <div className="text-center">
          <div className="hello bg-light p-3 mb-5 shadow-lg rounded">
            <h1 className="helloText bg-light">'Hello World!'</h1>
          </div>
          <div className="clearfix">
            <div className="biopic fadeIn bg-light d-inline-block col-6 float-left p-0">
              <img
                src="./images/me.jpeg"
                className="rounded-circle shadow-lg m-0 w-100"
              ></img>
            </div>
            <div className="intro fadeIn bg-light d-inline-block shadow-lg col-6 float-right mt-5 rounded">
              <p className="py-5 px-4">
                My name is Tucker and I'm a full-stack developer.
              </p>
            </div>
          </div>
          <div className="learnMore intro fadeIn bg-light w-25 p-1 rounded">
            <span className="next">
              <p className="mx-auto">Learn more.</p>
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
