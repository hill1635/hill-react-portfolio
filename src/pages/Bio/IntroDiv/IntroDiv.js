import React from "react";
import "./IntroDiv.css";

function IntroDiv() {
  return (
    <div className="hello col-lg-8 col-md-10 col-sm-12 mx-auto text-center">
      <h1 className="header">'Hello World!'</h1>
      <hr className="solid shadow-md"></hr>
      <p className="intro">My name is Tucker and I'm a full-stack developer.</p>
      <span className="next">
        <i class="fas fa-chevron-down arrow"></i>
        <i class="fas fa-chevron-down arrow"></i>
        <i class="fas fa-chevron-down arrow"></i>
      </span>
    </div>
  );
}

export default IntroDiv;
