import React from "react";
import Card from "../components/Card";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const productos = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  const clickShowProduct = (id) => {
    navigate(`/Detail/${id}`);
  };

  return (
    <>
      <div>
        <div className="text-center">
          <div className="row">
            {filters?.length > 0
              ? filters.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-sm-6 col-md-4 col-lg-3 "
                    >
                      <Card clickBtn={clickShowProduct} product={product} />
                    </div>
                  );
                })
              : productos.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-sm-6 col-md-4 col-lg-3 "
                    >
                      <Card clickBtn={clickShowProduct} product={product} />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
