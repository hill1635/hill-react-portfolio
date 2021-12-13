import React from "react";
import "./style.css";

function FunFacts() {
  return (
    <section className="funFacts text-center col-11 col-sm-6 bg-light rounded shadow-lg mx-auto p-0 my-4">
      <div id="carouselExampleIndicators" className="carousel slide h-100 py-4" data-bs-ride="carousel">
        <header className="header w-75">
            <h3>Fun Facts:</h3>
            <hr></hr>
        </header>
        <div className="carousel-inner facts px-5">
            <div className="carousel-item active fact">
            <p>
                Cat and dog person (why choose a side?), but has neither right now
                unfortunately
            </p>
            </div>
            <div className="carousel-item fact">
            <p>Loves planning trips almost as much as taking them.</p>
            </div>
            <div className="carousel-item fact">
            <p>Enjoys Microsoft Excel perhaps a bit too much.</p>
            </div>
            <div className="carousel-item fact">
            <p>Neutral about pineapple on pizza.</p>
            </div>
            <div className="carousel-item fact">
            <p>
                Recent shower thought: Is a single piece of spaghetti called a
                spaghetto?
            </p>
            </div>
            <div className="carousel-item fact">
            <p>
                Shower thought follow-up: I Googled it, and it in fact is. Two
                semesters of Italian paying off right there.
            </p>
            </div>
        <button className="directionals carousel-control-prev bg-transparent text-body h-100 border-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button className="directionals carousel-control-next bg-transparent text-body h-100 border-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </button>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
