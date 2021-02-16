import React from "react";
import Project from "../Project";

function Portfolio() {
    return (
        <main>
            <h1>Portfolio</h1>
            <hr className="solid"></hr>
            <Project />
            <p>Check out my GitHub page <a href="https://github.com/hill1635">here</a>.</p>
        </main>
    );
}

export default Portfolio;