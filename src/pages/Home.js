import React, { useEffect, useState } from "react";
import Card from "../components/Card";
//import { fetchProducts } from "../store/actions/products";
// import { getProducts } from "../redux/pepe";
import { fetchProducts } from "../redux/actions/index";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const clickShowProduct = (id) => {
    navigate(`/Detail/${id}`);
  };

  return (
    <>
      <div>
        <div className="text-center">
          <div className="row">
            {productos.map((product) => {
              return (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  className="col-sm-6 col-md-4 col-lg-3"
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
