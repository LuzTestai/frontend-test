import React, { useEffect } from "react";
import DetailCard from "../components/DetailCard";
import "../styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/actions/index";
import { Routes, Route, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, []);

  const clickAddCard = () => {
    console.log("hice click");
  };
  return (
    <>
      <div>
        <DetailCard product={product} clickBtn={clickAddCard} />
      </div>
    </>
  );
}

export default Detail;
