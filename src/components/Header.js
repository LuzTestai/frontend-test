import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { fetchProducts, fetchProductSearch } from "../redux/actions/index";
import CarritoSvg from "../assets/svg/carrito";

import { useDispatch, useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);

  console.log(location);
  useEffect(() => {
    //console.log("entre");
    dispatch(fetchProducts());
  }, []);

  const dividirCadena = (cadenaADividir, separador) => {
    var arrayDeCadenas = cadenaADividir.split(separador);
    var arr = [];
    for (var i = 0; i < arrayDeCadenas.length; i++) {
      arr.push(arrayDeCadenas[i] + " ");
    }
    return arr;
  };

  const search = (search) => {
    console.log({ search });
    const productFilter = productos.filter((product) =>
      product.model.toLowerCase().includes(search)
    );
    if (search) {
      dispatch(fetchProductSearch(productFilter));
    } else {
      dispatch(fetchProductSearch([]));
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid m-navbar">
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeNav navbar-brand" : "navbar-brand"
            }
            to="/home"
          >
            ZARA
          </NavLink>

          <div className="" id="navbarText">
            <div className="d-flex">
              {location.pathname === "/home" ? (
                <form className="d-flex" role="search">
                  <input
                    onChange={(event) => search(event.target.value)}
                    className="form-control me-2"
                    type="search"
                    placeholder="search"
                    aria-label="Search"
                  />
                </form>
              ) : null}

              <div className=" position-relative container-carrito">
                <CarritoSvg />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                  99+
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
