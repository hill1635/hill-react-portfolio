import React from "react";
import "./style.scss";

function Background() {
  return (
    <section className="background infoBox col-11 mx-auto my-4 p-4">
      <span className="d-inline-flex">
        <h3 className="object">Background:</h3> 
        <h3 className="value">MERN</h3>
        <h3 className="character ml-3">&#123;</h3>
      </span>
      {/* Carousel? */}
      <ul className="list-unstyled px-4">
        <li className="py-2">
          <span className="string">React: </span>
          A lot of my training focused around building web apps using the React
          JavaScript library. After creating many walls of text with vanilla
          JavaScript, React was a breath of fresh air. The component system and
          folder structure made conceptual sense and my brain was happy to
          process code broken up into smaller parts. On top of that, the library
          helps create very speedy apps that you can edit on the fly, rather
          than having to re-load the whole page!
        </li>
        <li className="py-2">
          <span className="string">MongoDB: </span>
          MongoDB was used primarily as the database to store information for
          projects, assignments, and exercises. The initial set up is a little
          confusing, but once it is up and rolling, I found MongoDB, in
          conjunction with the Mongoose OOP library, a lot more intuitive and
          user-friendly compared to MySQL and Sequelize.
        </li>
        <li className="py-2">
          <span className="string">Express: </span>
          To connect apps to databases, Express was almost omnipresent in all
          projects, assignments, and exercises. As with MongoDB and Mongoose,
          the set up is a little confusing, but is fairly cut-and-paste
          (literally and figuratively) after that.
          {/* More Here. */}
        </li>
        <li className="py-2">
          <span className="string">Node.js: </span>
          And finally the engine that powers the car - Node.js. Not going to
          lie, it's not the most exciting and shiny object in the stack.
          {/* More Here. */}
        </li>
      </ul>
      <h3 className="character">&#125;</h3>
    </section>
  );
}

export default Background;
