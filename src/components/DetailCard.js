import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, loadingAddCard } from "../redux/actions/index";

function Card({ product }) {
  console.log(product);
  const dispatch = useDispatch();
  const [storageSelected, setStorageSelected] = useState("");
  const [colorsSelected, setColorsSelected] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(true);
  const loadingCard = useSelector((state) => state.loadingCard);

  const storages = product.options?.storages;
  const colors = product.options?.colors;

  useEffect(() => {
    storageSelected && colorsSelected
      ? setDisabledBtn(false)
      : setDisabledBtn(true);
  }, [storageSelected, colorsSelected]);

  const clickAddCarito = () => {
    const card = {
      id: product.id,
      colorCode: colorsSelected,
      storageCode: storageSelected,
    };
    dispatch(addToCard(card));
    dispatch(loadingAddCard(true));
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0 row-detail">
          <div className="col-md-6 p-3 px-5">
            <img
              src={product.imgUrl}
              className="card-img-top mb-5 mb-md-0"
              alt="FLOR"
            />
          </div>
          <div className="col-md-6 p-3">
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
                  - Principal:
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
            <div className="min-heigth">
              <label className="msj-advertencia">
                {disabledBtn && "Es obligatorio elegir una opción"}
              </label>
            </div>

            <div className="mt-4">
              <button
                disabled={disabledBtn}
                onClick={() => clickAddCarito()}
                type="button"
                className={`btn btn-info  ${
                  loadingCard ? "pulse" : "btn-add-card"
                }`}
              >
                {loadingCard ? "AGREGANDO ..." : "AGREGAR AL CARRITO"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
