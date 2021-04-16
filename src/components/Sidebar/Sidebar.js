import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="btn-group-vertical buttons position-fixed">
      <button className="rounded-circle mb-2"><img src="./icons/star.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/bootstrap.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/javascript.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/jquery.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/nodejs.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/react.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/mongodb.svg"></img></button>
      <button className="rounded-circle mb-2"><img src="./icons/mysql.svg"></img></button>
    </div>
  );
}

export default Sidebar;
