import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/actions/index";
import { useParams } from "react-router-dom";

import DetailCard from "../components/DetailCard";
import "../styles/global.css";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <DetailCard product={product} />
      </div>
    </>
  );
}

export default Detail;
