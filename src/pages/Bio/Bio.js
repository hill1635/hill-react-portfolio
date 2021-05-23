import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <main className="bio col-9 mt-5 pt-2">
      <div className="col-6 mx-auto text-center">
        <h1 className="header">'Hello World!'</h1>
        <hr className="solid shadow-md"></hr>
      </div>
      <div className="content col-11 mx-auto">
        <section className="col-11 row g-0 p-0 ease-right">
          <div className="col-5 m-0">
            <img src="./icons/placeholder.png" className="rounded-circle"></img>
          </div>
          <div className="col-7 m-0 text-left">
            <p>
              I am a Full-Stack Developer and recent graduate from the
              University of Utah Coding Bootcamp with eight months of
              experience.
            </p>
          </div>
        </section>
        <section className="col-11 row g-0 p-0 ease-left">
          <div className="col-7 m-0 text-right">
            <p>
              My front-end wheelhouse is in HTML, CSS, and Javascript. My CSS
              background expands to the Bootstrap framework. Javscript libraries
              learned include jQuery and React as well as server-side
              technologies such as AJAX and APIs.
            </p>
          </div>
          <div className="col-5 m-0">
            <img src="./icons/placeholder.png" className="rounded"></img>
          </div>
        </section>
        <section className="col-11 row g-0 p-0 ease-right">
          <div className="col-5 m-0">
            <img src="./icons/placeholder.png"></img>
          </div>
          <div className="col-7 m-0 text-left">
            <p>
              On the back-end, I am knowledgeable in the Node.js environment and
              server creation with Node, Express and HTTP. Database construction
              with MySQL, MongoDB, and IndexedDB using ORM and MVC techniques
              with Sequelize and Mongoose.
            </p>
          </div>
        </section>
        <section className="col-11 row g-0 p-0 ease-left">
          <div className="col-7 m-0 text-right">
            <p>
              Sprinkle on top of that some testing with Jest and Progressive Web
              Apps with Webpack and that sums up the past five months for me!
            </p>
          </div>
          <div className="col-5 m-0">
            <img src="./icons/placeholder.png"></img>
          </div>
        </section>
        <section className="card col-11 mx-auto">
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
