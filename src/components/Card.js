import React from "react";
import "../styles/global.css";
//  src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
function Card() {
  return (
    <>
      <div class="card mb-3">
        <img
          src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
          class="card-img-top"
          alt="flores"
        />
        <div class="card-body">
          <h5 class="card-title">MARCA</h5>
          <p class="card-text">modelo</p>
          <p class="card-text">
            <small class="text-muted">PRECIO $ 400</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
