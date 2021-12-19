import React from "react";
import "./style.scss";

function BasicInfo() {
  return (
    <section className="basicInfo infoBox col-11 clearfix mx-auto my-4 p-4">
      <span className="d-inline-flex">
        <h3 className="object">Basic Info</h3>
        <h3 className="character ml-3">&#123;</h3>
      </span>
      <div className="picDiv col-7 col-md-6 col-lg-5 float-right p-0">
        <img
          src="./images/me.jpeg"
          className="profilePic float-right m-0 w-100"
        ></img>
      </div>
      <div className="text-wrap px-4 py-2">
        <p>
          <strong className="string">From: </strong> Norway, ME
        </p>
        <p>
          <strong className="string">Current: </strong> Cottonwood Heights, UT
        </p>
        <p>
          <strong className="string">Nickname: </strong> Tuck
        </p>
        <p>
          <strong className="string">Aliases: </strong>Trevor, Tyler, Hunter, Trucker (it's easy to
          mix up my name, apparently)
        </p>
        <p>
          <strong className="string">Hobbies: </strong>Hiking, Skiing, Traveling, Playing Guitar,
          Video Games, Cooking (when I feel like it)
        </p>
        <p>
          <strong className="string">Education: </strong> B.A. in Psychology and Sociology,
          University of Vermont
        </p>
        <p>
          <strong className="string">Certifications: </strong>Full-Stack Development, University of
          Utah Coding Bootcamp
        </p>
        <p>
          <strong className="string">Languages: </strong>JavaScript, HTML, French (un petit peu),
          Italian (two semesters in college), Sarcasm
        </p>
      </div>
      <h3 className="character">&#125;</h3>
    </section>
  );
}

export default BasicInfo;
