import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  fetchProducts,
  fetchProductSearch,
  loadingCard,
  receivedProducts,
  fetchSearch,
} from "../redux/actions/index";
import CarritoSvg from "../assets/svg/carrito";

import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "../utils/getLocalStorage";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);
  const card = useSelector((state) => state.cardQuantity);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const localStorageProcutos = getLocalStorage("productos");
    if (
      localStorageProcutos !== null &&
      localStorageProcutos?.length > 0 &&
      productos?.length === 0
    ) {
      dispatch(receivedProducts(localStorageProcutos));
    } else if (localStorageProcutos === null && productos?.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productos]);

  useEffect(() => {
    dispatch(fetchSearch(search));
  }, [dispatch, search]);

  useEffect(() => {
    dispatch(loadingCard(false));
  }, [card, dispatch]);

  const doSearch = (search) => {
    const productFilter = productos.filter((product) => {
      return product.model.toLowerCase().includes(search);
    });
    if (search) {
      setSearch(true);
      dispatch(fetchProductSearch(productFilter));
    } else {
      setSearch(false);
      dispatch(fetchProductSearch([]));
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid m-navbar">
          <div className="d-flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav navbar-brand" : "navbar-brand"
              }
              to="/home"
            >
              ZARA
            </NavLink>
            {location.pathname.includes("/detail") && (
              <span className="navbar-nav mr-auto">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeNav nav-link" : "nav-link"
                  }
                  to="/detail"
                >
                  Producto
                </NavLink>
              </span>
            )}
          </div>

          <div className="" id="navbarText">
            <div className="d-flex">
              {location.pathname === "/home" ? (
                <form className="d-flex" role="search">
                  <input
                    onChange={(event) => doSearch(event.target.value)}
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
                  {card}
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
