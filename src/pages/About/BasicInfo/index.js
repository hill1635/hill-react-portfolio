import React from "react";
import "./style.css";

function BasicInfo() {
  return (
    <section className="col-11 clearfix mx-auto my-4 p-0">
      <div className="picDiv col-7 col-md-6 col-lg-5 float-right p-0 rounded">
        <img
          src="./images/me.jpeg"
          className="profilePic float-right p-4 rounded shadow m-0 w-100 bg-light"
        ></img>
      </div>
      <div className="text-wrap bg-light rounded p-4">
        <p>
          <strong>From: </strong> Norway, ME
        </p>
        <p>
          <strong>Current: </strong> Cottonwood Heights, UT
        </p>
        <p>
          <strong>Nickname: </strong> Tuck
        </p>
        <p>
          <strong>Aliases: </strong>Trevor, Tyler, Hunter, Trucker (it's easy to
          mix up my name, apparently)
        </p>
        <p>
          <strong>Hobbies: </strong>Hiking, Skiing, Traveling, Playing Guitar,
          Video Games, Cooking (when I feel like it)
        </p>
        <p>
          <strong>Education: </strong> B.A. in Psychology and Sociology,
          University of Vermont
        </p>
        <p>
          <strong>Certifications: </strong>Full-Stack Development, University of
          Utah Coding Bootcamp
        </p>
        <p>
          <strong>Languages: </strong>JavaScript, HTML, French (un petit peu),
          Italian (two semesters in college), Sarcasm
        </p>
      </div>
    </section>
  );
}

export default BasicInfo;
