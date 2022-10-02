import React from "react";

function Spinner() {
  return (
    <>
      <div className="container-spinner">
        <div className="spinner-grow spinner" role="status"></div>
        <div className="spinner-grow spinner" role="status"></div>
        <div className="spinner-grow spinner" role="status"></div>
      </div>
    </>
  );
}

export default Spinner;
