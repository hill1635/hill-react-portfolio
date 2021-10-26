import React from "react";
import "./AboutMeDiv.css";

function AboutMeDiv() {
  return (
    <div className="aboutMe drop col-lg-8 col-md-10 col-xs-12 text-center bg-light shadow-lg mx-auto mt-5 p-5 round">
      <section className="col-11 row mx-auto my-5 ease-right p-0">
        <div className="col-12 m-0">
          <img
            src="./images/certificate.png"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-12 m-0">
          <p className="py-4 text-center">
            University of Utah Coding Bootcamp Graduate with a certificate in Full-Stack Development.
          </p>
        </div>
      </section>
      <section className="col-9 col-sm-11 row mx-auto my-5 ease-left p-0">
      <div className="col-12 m-0">
          <img
            src="./images/frontend.png"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-12 m-0">
          <p className="py-4 text-center">
            My front-end wheelhouse is in HTML, CSS, and Javascript. My CSS
            background expands to the Bootstrap framework. Javscript libraries
            learned include jQuery and React as well as server-side technologies
            such as AJAX and APIs.
          </p>
        </div>
      </section>
      <section className="col-9 col-sm-11 row mx-auto my-5 ease-right p-0">
        <div className="col-12 m-0">
          <img
            src="./images/network.jpeg"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-12 m-0">
          <p className="py-4 text-center">
            On the back-end, I am knowledgeable in the Node.js environment and
            server creation with Node, Express and HTTP. Database construction
            with MySQL, MongoDB, and IndexedDB using ORM and MVC techniques with
            Sequelize and Mongoose.
          </p>
        </div>
      </section>
      <section className="col-9 col-sm-11 row mx-auto my-5 ease-left p-0">
      <div className="col-12 m-0">
          <img
            src="./images/other.png"
            className="bio-pics rounded-circle shadow"
          ></img>
        </div>
        <div className="col-12 m-0">
          <p className="py-4 text-center">
            Sprinkle on top of that some testing with Jest and Progressive Web
            Apps with Webpack and that sums up the past five months for me!
          </p>
        </div>
      </section>
      <section className="col-8 row pt-2 mx-auto p-0">
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
