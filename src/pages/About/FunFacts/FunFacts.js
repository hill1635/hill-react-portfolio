import React from "react";
import "./FunFacts.css";

function FunFacts() {
  return (
    <section className="col-11 bg-light rounded shadow-lg mx-auto my-4 p-4">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <p><strong>Fun Facts:</strong></p>
        <div>
          <p>
            Cat and dog person (why choose a side?), but has neither right now
            unfortunately
          </p>
        </div>
        <div>
          <p>Loves planning trips almost as much as taking them.</p>
        </div>
        <div>
          <p>Enjoys Microsoft Excel perhaps a bit too much.</p>
        </div>
        <div>
          <p>Neutral about pineapple on pizza.</p>
        </div>
        <div>
          <p>
            Recent shower thought: Is a single piece of spaghetti called a
            spaghetto?
          </p>
        </div>
        <div>
          <p>
            Shower thought follow-up: I Googled it, and it in fact is. Two
            semesters of Italian paying off right there.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
