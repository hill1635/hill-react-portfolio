import React from "react";
import "./FunFacts.css";

function FunFacts() {
  return (
    <section className="funFacts text-center col-11 col-sm-7 bg-light rounded shadow-lg mx-auto p-0 my-4">
      <div id="carouselExampleIndicators" className="carousel slide h-100 py-4" data-bs-ride="carousel">
        <header className="header">
            <h3>Fun Facts:</h3>
        </header>
        <div className="carousel-inner facts px-5">
            <div className="carousel-item active p-5">
            <p>
                Cat and dog person (why choose a side?), but has neither right now
                unfortunately
            </p>
            </div>
            <div className="carousel-item p-5">
            <p>Loves planning trips almost as much as taking them.</p>
            </div>
            <div className="carousel-item p-5">
            <p>Enjoys Microsoft Excel perhaps a bit too much.</p>
            </div>
            <div className="carousel-item p-5">
            <p>Neutral about pineapple on pizza.</p>
            </div>
            <div className="carousel-item p-5">
            <p>
                Recent shower thought: Is a single piece of spaghetti called a
                spaghetto?
            </p>
            </div>
            <div className="carousel-item p-5">
            <p>
                Shower thought follow-up: I Googled it, and it in fact is. Two
                semesters of Italian paying off right there.
            </p>
            </div>
        <button className="directionals carousel-control-prev bg-transparent text-body h-100" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button className="directionals carousel-control-next bg-transparent text-body h-100" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </button>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
