import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container-app">
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
