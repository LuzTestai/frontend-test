import React from "react";
//  src="https://i.blogs.es/f007ba/daisy-755517_960_720/1366_2000.jpg"
function Card({ product }) {
  return (
    <>
      <div className="card mb-3">
        <img src={product.imgUrl} className="card-img-top" alt="flores" />
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className=" card-text">{product.model}</p>
          <p className="card-text">
            {product.price ? (
              <small className="text-muted price ">$ {product.price}</small>
            ) : (
              <p className="sin-stock">(Sin stock)</p>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
