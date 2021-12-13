import React from "react";
import "./FunFacts.css";

function FunFacts() {
  return (
    <section className="col-11 bg-light rounded shadow-lg mx-auto my-4 p-4">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <p><strong>Fun Facts:</strong></p>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <p>
                Cat and dog person (why choose a side?), but has neither right now
                unfortunately
            </p>
            </div>
            <div className="carousel-item">
            <p>Loves planning trips almost as much as taking them.</p>
            </div>
            <div className="carousel-item">
            <p>Enjoys Microsoft Excel perhaps a bit too much.</p>
            </div>
            <div className="carousel-item">
            <p>Neutral about pineapple on pizza.</p>
            </div>
            <div className="carousel-item">
            <p>
                Recent shower thought: Is a single piece of spaghetti called a
                spaghetto?
            </p>
            </div>
            <div className="carousel-item">
            <p>
                Shower thought follow-up: I Googled it, and it in fact is. Two
                semesters of Italian paying off right there.
            </p>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}

export default FunFacts;
