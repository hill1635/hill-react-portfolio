import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <main className="bg-intro col-xs-12 col-md-10 col-lg-8 mt-5 p-0 mx-auto rounded text-center">
          <div className="header bg-light p-3 mb-5 shadow-lg rounded">
            <h1 className="typedText bg-light">'Hello World!'</h1>
          </div>
          <div className="clearfix">
            <div className="biopic bg-light d-inline-block col-6 float-left p-0">
              <img
                src="./images/me.jpeg"
                className="rounded-circle shadow-lg m-0 w-100"
              ></img>
            </div>
            <div className="intro bg-light d-inline-block shadow-lg col-6 float-right mt-5 rounded">
              <p className="py-5 px-4">
                My name is Tucker and I'm a full-stack developer.
              </p>
            </div>
          </div>
          <div className="learnMore intro bg-light w-25 p-1 rounded">
          <Link to="/about">
            <span className="next">
              <p className="mx-auto">Learn more.</p>
            </span>
          </Link>
          </div>
    </main>
  );
}

export default Home;
