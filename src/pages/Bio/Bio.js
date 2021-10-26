import React, { useEffect } from "react";
import IntroDiv from "./IntroDiv/IntroDiv.js";
import AboutMeDiv from "./AboutMeDiv/AboutMeDiv.js";
import "./Bio.css";

function Bio() {
  useEffect(() => {
    var next = document.querySelector(".next");
    var aboutMe = document.querySelector(".aboutMe");

    next.addEventListener("click", function () {
      aboutMe.style.display = "block";
      window.scroll({ top: 525, behavior: "smooth" });
    });

  });

  return (
    <main className="bio col-9 pt-2">
      <IntroDiv></IntroDiv>
      <AboutMeDiv></AboutMeDiv>
    </main>
  );
}

export default Bio;
