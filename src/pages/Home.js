import React, { useEffect, useState } from "react";
import Card from "../components/Card";
//import { fetchProducts } from "../store/actions/products";
// import { getProducts } from "../redux/pepe";
import { fetchProducts } from "../redux/actions/index";

import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div>
        <div className="text-center">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>

            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
            <div className="col-md-6 col-lg-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
