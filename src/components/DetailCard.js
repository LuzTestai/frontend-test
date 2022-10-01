import React from "react";
import ArrowLeft from "../assets/svg/arrow.left";

function Card({ product, clickBtn }) {
  return (
    <>
      <div className="card mb-3">
        <div className="p-3">
          <ArrowLeft />
        </div>
        <div className="row g-0 pd-detail-row">
          <div className="col-md-4 p-3">
            <img
              src={product.imgUrl}
              className="img-fluid rounded-start"
              alt="FLOR"
            />
          </div>
          <div className="col-md-8 p-3">
            <h5 className="card-title">{product.model}</h5>
            <ul>
              <li>Bateria : {product.battery}</li>
              <li>Colors : {product.colors?.join()}</li>
              <li>Anunciada : {product.announced}</li>
              <li>Marca : {product.brand}</li>
              <li>Ram : {product.ram}</li>
            </ul>

            <h5 className="card-title">Actions</h5>
            <ul>
              <li> Gps : {product.gps}</li>
              <li>Radio : {product.radio}</li>
              <li>Camara primera : {product.primaryCamera?.join()}</li>
              <li>USB : {product.usb?.join()}</li>
            </ul>
            <div className="mt-4">
              <button
                onClick={() => clickBtn()}
                type="button"
                className="btn btn-info"
              >
                Agrgar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
