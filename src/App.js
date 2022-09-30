import React from "react";
import { Routes, Route, Navigate, useNavigate, useMatch } from "react-router";
//import Navbar from "./Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import "./styles/global.css";
// import "./sass/index.scss"

function App() {
  return (
    <>
      <Navbar />
      <div className="container-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
