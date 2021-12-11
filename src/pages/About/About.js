import React, { useEffect } from "react";
import "./About.css";

function About() {
  // useEffect(() => {
  //   var next = document.querySelector(".next");
  //   var aboutMe = document.querySelector(".aboutMe");

  //   next.addEventListener("click", function () {
  //     aboutMe.style.display = "block";
  //     window.scroll({ top: 765, behavior: "smooth" });
  //   });

  // });

  return (
    <main className="col-xs-12 col-md-10 col-lg-8 mt-5 mx-auto">
      <div className="bg-about row col-12 mx-auto shadow-lg p-0 rounded">
        <div className="header bg-light p-3 mb-5 shadow-lg rounded mx-auto">
          <h1 className="typedText bg-light">Tucker Hill</h1>
        </div>
        <section className="col-11 clearfix mx-auto my-4 p-0">
          <div className="picDiv col-5 float-right p-0 rounded">
            <img src="./images/me.jpeg" className="profilePic float-right p-4 rounded shadow m-0 w-100 bg-light"></img>
          </div>
          <div className="text-wrap bg-light rounded p-4">
            <p><strong>From: </strong> Norway, ME</p>
            <p><strong>Current: </strong> Cottonwood Heights, UT</p>
            <p><strong>Nickname: </strong> Tuck</p>
            <p><strong>Aliases: </strong>Trevor, Tyler, Hunter, Trucker (it's easy to mix up my name, apparently)</p>
            <p><strong>Hobbies: </strong>Hiking, Skiing, Traveling, Playing Guitar, Video Games, Cooking (when I feel like it)</p>
            <p><strong>Education: </strong> B.A. in Psychology and Sociology, University of Vermont</p>
            <p><strong>Certifications: </strong>Full-Stack Development, University of Utah Coding Bootcamp</p>
            <p><strong>Languages: </strong>JavaScript, HTML, French (un petit peu), Italian (two semesters in college), Sarcasm</p>
          </div>
        </section>
        <section className="col-11 bg-light rounded shadow-lg mx-auto my-4 p-4">
          <p><strong>Background: </strong> MERN stack (mostly)</p>
          {/* Carousel? */}
          <ul>
            <li>
              A lot of my training focused around building web apps using
              the React JavaScript library.  After creating many walls of 
              text with vanilla JavaScript, React was a breath of fresh air.
              The component system and folder structure made conceptual sense
              and my brain was happy to process code broken up into smaller parts.
              On top of that, the library helps create very speedy apps that you
              can edit on the fly, rather than having to re-load the whole page!
            </li>
            <li>
              MongoDB was used primarily as the database to store information for 
              projects, assignments, and exercises.  The initial set up is a little
              confusing, but once it is up and rolling, I found MongoDB, in
              conjunction with the Mongoose OOP library, a lot more intuitive and
              user-friendly compared to MySQL and Sequelize.
            </li>
            <li>
              To connect apps to databases, Express was almost omnipresent 
              in all projects, assignments, and exercises.  As with MongoDB and
              Mongoose, the set up is a little confusing, but is fairly cut-and-paste
              (literally and figuratively) after that.
              {/* More Here. */}
            </li>
            <li>
              And finally the engine that powers the car - Node.js.  Not going to lie,
              it's not the most exciting and shiny object in the stack.
              {/* More Here. */}
            </li>
          </ul>
        </section>
        <section className="col-11 bg-light rounded shadow-lg mx-auto my-4 p-4">
          <p><strong>Fun Facts:</strong></p>
          {/* Carousel? */}
          <ul>
            <li>Cat and dog person (why choose a side?), but has neither right now unfortunately</li>
            <li>Loves planning trips almost as much as taking them.</li>
            <li>Enjoys Microsoft Excel perhaps a bit too much.</li>
            <li>Neutral about pineapple on pizza.</li>
            <li>Recent shower thought: Is a single piece of spaghetti called a spaghetto?</li>
            <li>Shower thought follow-up: I Googled it, and it in fact is.  Two semesters of Italian paying off right there.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default About;
