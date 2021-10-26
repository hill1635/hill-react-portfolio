import React from "react";
import "./IntroDiv.css";

function IntroDiv() {
  return (
    <div className="hello col-lg-10 col-md-11 col-sm-12 mx-auto p-5 text-center bg-light shadow-lg my-5">
      <h1 className="helloText">'Hello World!'</h1>
      <hr className="solid shadow-md"></hr>
      <p className="mt-5 mb-4 intro">My name is Tucker and I'm a full-stack developer.</p>
      <img src="./images/me.jpg" className="bio-pics rounded-circle my-4 shadow"></img>
      <span className="next mt-4 d-block">
        <i class="fas fa-chevron-down arrow"></i>
        <i class="fas fa-chevron-down arrow"></i>
        <i class="fas fa-chevron-down arrow"></i>
      </span>
    </div>
  );
}

export default IntroDiv;
