import React from "react";
import Card from "../components/Card";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  const clickShowProduct = (id) => {
    console.log({ id });
    console.log("hola clickie");
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
                      // data-aos="fade-up"
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
                      // data-aos="fade-up"
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
