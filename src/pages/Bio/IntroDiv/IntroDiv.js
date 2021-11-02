import React from "react";
import "./IntroDiv.css";

function IntroDiv() {
  return (
    <div className="row mt-5 mx-auto">
      <div className="background mx-auto col-11 shadow-lg p-0">
        <div className="hello p-5 text-center bg-light shadow-lg">
          <h1 className="helloText">'Hello World!'</h1>
          <hr className="solid shadow-md"></hr>
          <p className="mt-5 mb-4 intro">My name is Tucker and I'm a full-stack developer.</p>
          <img src="./images/me.jpeg" className="bio-pics rounded-circle my-4 shadow intro"></img>
          <span className="next mt-4 d-block">
            <p className="intro">Learn more.</p>
            <i class="fas fa-chevron-down arrow"></i>
            <i class="fas fa-chevron-down arrow"></i>
            <i class="fas fa-chevron-down arrow"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntroDiv;
