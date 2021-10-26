import React from "react";
import "./AboutMeDiv.css";

function AboutMeDiv() {
  return (
    <div className="aboutMe drop col-lg-10 col-md-11 col-sm-12 text-center bg-light shadow-lg mx-auto mt-5 p-5">
      <section className="col-11 row g-0 p-2 ease-right">
        <div className="col-5 m-0">
          <img
            src="./images/me.jpg"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-7 m-0">
          <p className="py-5 text-center">
            I am a Full-Stack Developer and recent graduate from the University
            of Utah Coding Bootcamp with eight months of experience.
          </p>
        </div>
      </section>
      <section className="col-11 row g-0 p-2 ease-left">
        <div className="col-7 m-0">
          <p className="py-5 text-center">
            My front-end wheelhouse is in HTML, CSS, and Javascript. My CSS
            background expands to the Bootstrap framework. Javscript libraries
            learned include jQuery and React as well as server-side technologies
            such as AJAX and APIs.
          </p>
        </div>
        <div className="col-5 m-0">
          <img
            src="./images/frontend.png"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
      </section>
      <section className="col-11 row g-0 p-2 ease-right">
        <div className="col-5 m-0">
          <img
            src="./images/network.jpeg"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-7 m-0">
          <p className="py-5 text-center">
            On the back-end, I am knowledgeable in the Node.js environment and
            server creation with Node, Express and HTTP. Database construction
            with MySQL, MongoDB, and IndexedDB using ORM and MVC techniques with
            Sequelize and Mongoose.
          </p>
        </div>
      </section>
      <section className="col-11 row g-0 p-2 ease-left">
        <div className="col-7 m-0">
          <p className="py-5 text-center">
            Sprinkle on top of that some testing with Jest and Progressive Web
            Apps with Webpack and that sums up the past five months for me!
          </p>
        </div>
        <div className="col-5 m-0">
          <img
            src="./images/other.png"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
      </section>
      <section className="col-8 row g-0 pt-2 mx-auto">
        <p className="text-center">
          If you would like to learn more about me, check out my{" "}
          <a
            href="https://drive.google.com/file/d/11tDvnpqogtIGNSmkWVSz8V4KxkUJ0dKB/view?usp=sharing"
            target="_blank"
          >
            resume
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default AboutMeDiv;
