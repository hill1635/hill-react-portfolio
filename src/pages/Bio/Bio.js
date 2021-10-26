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
      window.scroll({ top: 765, behavior: "smooth" });
    });

  });

  return (
    <main className="bio col-12">
      <IntroDiv></IntroDiv>
      <AboutMeDiv></AboutMeDiv>
    </main>
  );
}

export default Bio;
