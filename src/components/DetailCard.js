import React from "react";
//  src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
function Card() {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
              className="img-fluid rounded-start"
              alt="FLOR"
            />
          </div>
          <div className="col-md-6">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
