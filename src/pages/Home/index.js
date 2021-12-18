import React from "react";
import "./style.css";

function Home() {
  return (
    <main className="bg-main col-11 col-md-10 col-lg-8 text-center">
      <header className="header bg-light shadow-lg">
        <h1 className="typedText bg-light">'Hello World!'</h1>
      </header>
      <div className="clearfix">
        <div className="biopic col-md-6 col-sm-12">
          <img
            src="./images/me.jpeg"
            className="rounded-circle shadow-lg m-0 w-100"
          ></img>
        </div>
        <div className="intro bg-light shadow-lg col-md-6 col-sm-12">
          <p>My name is Tucker and I'm a full-stack developer.</p>
        </div>
      </div>
      <a href="/about">
        <span className="learnMore bg-light shadow-lg">
          <p>&gt;&gt;Learn more.&lt;&lt;</p>
        </span>
      </a>
    </main>
  );
}

export default Home;
