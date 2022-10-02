import React from "react";

function Card({ product, clickBtn }) {
  return (
    <>
      <div key={product.id} className="card mb-3 p-2">
        <img
          src={product.imgUrl}
          className="img-fluid rounded-start img-card"
          alt="flores"
        />
        <div className="card-body">
          <h5 className="fw-bolder">{product.brand}</h5>
          <p className=" card-text">{product.model}</p>
          <p className="card-text">
            {product.price ? (
              <small className="text-muted price ">${product.price}</small>
            ) : (
              <small className="sin-stock">(Sin stock)</small>
            )}
          </p>
          <button
            onClick={() => clickBtn(product.id)}
            type="button"
            className="btn-show-detail btn mt-auto"
          >
            VER PRODUCTO
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
