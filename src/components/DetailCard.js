import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/svg/arrow.left";

function Card({ product }) {
  console.log(product);
  const [storageSelected, setStorageSelected] = useState("");
  const [colorsSelected, setColorsSelected] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const storages = product.options?.storages;
  const colors = product.options?.colors;

  useEffect(() => {
    storageSelected && colorsSelected
      ? setDisabledBtn(false)
      : setDisabledBtn(true);
  }, [storageSelected, colorsSelected]);

  const clickAddCarito = () => {
    console.log("carrito");
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0 pd-detail-row">
          <div className="m-arrow-left">
            <ArrowLeft />
          </div>
          <div className="col-md-4 p-3">
            <img
              src={product.imgUrl}
              className="img-fluid rounded-start"
              alt="FLOR"
            />
          </div>
          <div className="col-md-8 p-3">
            <h5 className="card-title">{product.brand}</h5>
            <ul>
              <li>Modelo : {product.model}</li>
              <li>Precio : {product.price}</li>
              <li>CPU : {product.cpu}</li>
              <li>Ram : {product.ram}</li>
              <li>Sistema Operativo: {product.os}</li>
              <li>Resolucion de Pantalla : {product.displayResolution}</li>
              <li>Bateria : {product.battery}</li>
              <li>
                Camaras :
                <p>
                  - Principal:{" "}
                  {product.primaryCamera?.map((opt) => {
                    return <span> {opt}</span>;
                  })}
                </p>
                <p>
                  - Secundaria: <span>{product.secondaryCmera}</span>
                </p>
              </li>
              <li>Dimensiones : {product.dimentions}</li>
            </ul>

            <h5 className="card-title">Selecionar</h5>
            <div className="container-selected">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(event) => setStorageSelected(event.target.value)}
              >
                <option selected>Selec un Almacenamiento</option>
                {storages?.map((storage) => {
                  return (
                    <option key={`${storage.name}`} value={storage.code}>
                      {storage.name}
                    </option>
                  );
                })}
              </select>

              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(event) => setColorsSelected(event.target.value)}
              >
                <option selected>Selec un Color</option>
                {colors?.map((color) => {
                  return (
                    <option key={`${color.name}`} value={color.code}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              {disabledBtn && (
                <label className="msj-advertencia">
                  Es obligatorio elegir una opción.
                </label>
              )}
            </div>

            <div className="mt-4">
              <button
                disabled={disabledBtn}
                onClick={() => clickAddCarito()}
                type="button"
                className="btn btn-info"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
