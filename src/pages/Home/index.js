import React from "react";
import "./style.scss";

function Home() {
  return (
    <main className="bg-main col-10 col-md-10 col-lg-9 text-center">
      <header className="header">
        <span className="d-inline-flex">
          <h1 className="header1">&lt;h1&gt;</h1>
          <h1 className="typedText">'Hello World!'</h1>
          <h1 className="header1">&lt;/h1&gt;</h1>
        </span>
      </header>
      <div className="clearfix">
        <div className="biopic col-md-6 col-sm-12">
          <img
            src="./images/me.jpeg"
            className="me m-0 w-100"
          ></img>
        </div>
        <div className="infoBox intro col-md-6 col-sm-12 px-4 py-3">
          <span className="d-block element m-0">&lt;p&gt;</span>
          <div className="ml-4">
            <span>My name is </span>
            <span className="string">Tucker </span>
            <span>and I'm a </span>
            <span className="statement">full-stack developer.</span>
          </div>
          <span className="d-block element">&lt;/p&gt;</span>
        </div>
      </div>
      <a href="/about">
        <span className="infoBox learnMore p-4 mt-5">
          <p className="m-0">&lt;LearnMore/&gt;</p>
        </span>
      </a>
    </main>
  );
}

export default Home;
