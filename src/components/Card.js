import React from "react";
//  src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
function Card() {
  return (
    <>
      <div className="card mb-3">
        <img
          src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
          className="card-img-top"
          alt="flores"
        />
        <div className="card-body">
          <h5 className="card-title">MARCA</h5>
          <p className="card-text">modelo</p>
          <p className="card-text">
            <small className="text-muted">PRECIO $ 400</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
