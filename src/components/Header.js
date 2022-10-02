import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  fetchProducts,
  fetchProductSearch,
  loadingCard,
} from "../redux/actions/index";
import CarritoSvg from "../assets/svg/carrito";

import { useDispatch, useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.products);
  const card = useSelector((state) => state.cardQuantity);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const search = (search) => {
    const productFilter = productos.filter((product) =>
      product.model.toLowerCase().includes(search)
    );
    if (search) {
      dispatch(fetchProductSearch(productFilter));
    } else {
      dispatch(fetchProductSearch([]));
    }
  };

  useEffect(() => {
    dispatch(loadingCard(false));
  }, [card]);

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
