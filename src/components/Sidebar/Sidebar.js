import React from "react";
import "./Sidebar.css";

function Sidebar() {
  // function moveRight() 
  return (
    <div className="btn-group-vertical buttons position-fixed pl-3 pt-3 mt-5">
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/star.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/bootstrap.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/javascript.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/jquery.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/nodejs.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/react.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/mongodb.svg"></img></button>
      <button className="rounded-circle mb-2 shadow-lg"><img src="./icons/mysql.svg"></img></button>
    </div>
  );
}

export default Sidebar;
