import React from "react";
import Project from "../Project";

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <hr className="solid"></hr>
            <Project />
            <p>Check out my GitHub page <a href="https://github.com/hill1635">here</a>.</p>
        </div>
    );
}

export default Portfolio;