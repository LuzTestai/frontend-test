import React from "react";
import { Routes, Route, Navigate, useNavigate, useMatch } from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import "./styles/global.css";

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
