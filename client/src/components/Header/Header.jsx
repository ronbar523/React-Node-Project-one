import React from "react";
import Logo from "./Logo";
// import Navbar from "./Navbar";
// import BurgerButton from "./BurgerButton";
import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-myColor"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid ms-4 text-sm-center text-md-center ">
        <Logo />
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse collapse"
          id="navbarsExample04"
          style={{}}
        >
          <ul className="navbar-nav me-auto ms-lg-5 ms-xl-5 active mb-2 mb-md-0  fs-5 myNavbar">
            <li className="nav-item lin  ">
              <NavLink
                className=" nav-link lin"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/reviews">
                Reviews
              </NavLink>
            </li>
            {user && (user.biz || user.isAdmin) && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/my_products"
                >
                  My Products
                </NavLink>
              </li>
            )}
            {user && (user.biz || user.isAdmin) && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/my_cart">
                  My Cart
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav me-lg-5 me-xl-5 mb-2 mb-md-0 fs-5">
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/sing_up"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/sing_up_biz"
                  >
                    Sign Up Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
