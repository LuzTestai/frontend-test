import React from "react";

function Card({ product, clickBtn }) {
  return (
    <>
      <div className="card mb-3 p-3">
        <img
          src={product.imgUrl}
          className="img-fluid rounded-start img-card"
          alt="flores"
        />
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className=" card-text">{product.model}</p>
          <p className="card-text">
            {product.price ? (
              <small className="text-muted price ">${product.price}</small>
            ) : (
              <p className="sin-stock">(Sin stock)</p>
            )}
          </p>
          <button
            onClick={() => clickBtn(product.id)}
            type="button"
            className="btn btn-info"
          >
            VER PRODUCTO
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
