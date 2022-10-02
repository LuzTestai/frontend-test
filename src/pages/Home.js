import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card";
import Spinner from "../components/Spinner";

function Home() {
  const navigate = useNavigate();
  const productos = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);
  const search = useSelector((state) => state.search);

  const clickShowProduct = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      {productos.length < 1 ? (
        <Spinner />
      ) : (
        <div className="text-center">
          <div className="row">
            {filters?.length > 0 ? (
              filters.map((product) => {
                return (
                  <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 ">
                    <Card clickBtn={clickShowProduct} product={product} />
                  </div>
                );
              })
            ) : filters?.length === 0 && search ? (
              <p>"No hay resultados encontrados"</p>
            ) : (
              productos.map((product) => {
                return (
                  <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 ">
                    <Card clickBtn={clickShowProduct} product={product} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
