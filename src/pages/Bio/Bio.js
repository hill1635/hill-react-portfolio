import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <main className="bio">
      <h1 className="header">About Me.</h1>
      <hr className="solid"></hr>
      <div className="content px-3">
        <section className="card float-left col-8 row mt-0 g-0 p-0">
            <img src="./icons/placeholder.png" className="col-5"></img>
            <p>
              Hello World! I am a Full-Stack Developer with five months of
              experience. I am currently enrolled in the University of Utah
              Coding Bootcamp and on track to graduate in March. My goal as a
              Developer is to continue honing my current skills and becoming one
              step closer to mastery. In addition to this, I strive to continue
              learning new skills, technologies and languages. Coding is a
              continually evolving craft and the sheer amount of tools out there
              to learn is incredibly exciting as one who is always looking to
              push myself further and grow. Flexibility is also key to providing
              clients with the best options suited to their specific needs.
            </p>
        </section>
        <section className="card float-right col-8">
          <p>
            My front-end wheelhouse is in HTML, CSS, and Javascript. My CSS
            background expands to the Bootstrap framework. Javscript libraries
            learned include jQuery and React as well as server-side technologies
            such as AJAX and APIs.
          </p>
          <img src="./icons/placeholder.png"></img>
        </section>
        <section className="card float-left col-8">
          <img src="./icons/placeholder.png"></img>
          <p>
            On the back-end, I am knowledgeable in the Node.js environment and
            server creation with Node, Express and HTTP. Database construction
            with MySQL, MongoDB, and IndexedDB using ORM and MVC techniques with
            Sequelize and Mongoose.
          </p>
        </section>
        <section className="card float-right col-8">
          <p>
            Sprinkle on top of that some testing with Jest and Progressive Web
            Apps with Webpack and that sums up the past five months for me!
          </p>
          <img src="./icons/placeholder.png"></img>
        </section>
        <section className="card col-8 mx-auto">
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
