import React, { useEffect } from "react";
import "./About.css";

function About() {
  // useEffect(() => {
  //   var next = document.querySelector(".next");
  //   var aboutMe = document.querySelector(".aboutMe");

  //   next.addEventListener("click", function () {
  //     aboutMe.style.display = "block";
  //     window.scroll({ top: 765, behavior: "smooth" });
  //   });

  // });

  return (
    <main className="aboutMe col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-about row col-12 mx-auto shadow-lg p-0 rounded">
      </div>
    </main>
  );
}

export default About;
