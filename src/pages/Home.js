import React from "react";
import Card from "../components/Card";
import "../styles/global.css";

function Home() {
  return (
    <>
      <div>
        <div class="text-center">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>

            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
            <div class="col-md-6 col-lg-3">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
