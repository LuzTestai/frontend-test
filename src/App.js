import React from "react";
//import Navbar from "./Navbar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./styles/global.css";
// import "./sass/index.scss"

function App() {
  return (
    <>
      <Navbar />
      <div className="container-app">
        <Home />
      </div>
    </>
  );
}

export default App;
