import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <main className="bio col-9 mt-5 pt-2">
      <h1 className="header">'Hello World!'</h1>
      <hr className="solid shadow-md"></hr>
      <div className="content">
        <section className="card col-10 row mt-0 g-0 p-0 float-left ease-right">
          <img src="./icons/placeholder.png" className="col-5"></img>
          <p>
            I am a Full-Stack Developer and recent graduate from the University of Utah Coding Bootcamp with eight months of experience.
          </p>
        </section>
        <section className="card col-10 row mt-0 g-0 p-0 float-right ease-left">
          <p>
            My front-end wheelhouse is in HTML, CSS, and Javascript. My CSS
            background expands to the Bootstrap framework. Javscript libraries
            learned include jQuery and React as well as server-side technologies
            such as AJAX and APIs.
          </p>
          <img src="./icons/placeholder.png"></img>
        </section>
        <section className="card col-10 row mt-0 g-0 p-0 float-left ease-right">
          <img src="./icons/placeholder.png"></img>
          <p>
            On the back-end, I am knowledgeable in the Node.js environment and
            server creation with Node, Express and HTTP. Database construction
            with MySQL, MongoDB, and IndexedDB using ORM and MVC techniques with
            Sequelize and Mongoose.
          </p>
        </section>
        <section className="card col-10 row mt-0 g-0 p-0 float-right ease-left">
          <p>
            Sprinkle on top of that some testing with Jest and Progressive Web
            Apps with Webpack and that sums up the past five months for me!
          </p>
          <img src="./icons/placeholder.png"></img>
        </section>
        <section className="card col-10 mx-auto">
          <p>
            If you would like to learn more about me, check out my resume{" "}
            <a
              href="https://drive.google.com/file/d/11tDvnpqogtIGNSmkWVSz8V4KxkUJ0dKB/view?usp=sharing"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

export default Bio;
