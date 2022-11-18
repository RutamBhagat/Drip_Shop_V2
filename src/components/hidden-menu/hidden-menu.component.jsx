import React from "react";
import { Link } from "react-router-dom";
import "./hidden-menu.styles.scss";

const HiddenMenu = () => {
  return (
    <div
      id="hidden-menu"
      className="custom-gradient flex hidden flex-row justify-center pb-8"
    >
      <div className="flex p-5 drop-shadow-md sm:hidden" id="menu">
        <Link className="text-md text-white hover:text-violet-700" to="/">
          <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-black bg-opacity-60 drop-shadow-md hover:bg-indigo-800">
            <div></div>
            <h1 className="card-zoom-text text-xl opacity-100">
              <i className="fa-solid fa-house"></i>
            </h1>
          </div>
        </Link>
        <Link className="text-md text-white hover:text-violet-700" to="/shop">
          <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-black bg-opacity-60 drop-shadow-md hover:bg-indigo-800">
            <div></div>
            <h1 className="card-zoom-text text-xl opacity-100">
              <i className="fa-brands fa-shopify"></i>
            </h1>
          </div>
        </Link>
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-black bg-opacity-60 drop-shadow-md hover:bg-indigo-800">
          <div></div>
          <h1 className="card-zoom-text text-xl opacity-100">
            <i className="fa-solid fa-address-book"></i>
          </h1>
        </div>
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-black bg-opacity-60 drop-shadow-md hover:bg-indigo-800">
          <div></div>
          <h1 className="card-zoom-text text-xl opacity-100">
            <i className="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
        <Link to="/signin">
          <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-black bg-opacity-60 drop-shadow-md hover:bg-indigo-800">
            <div></div>
            <h1 className="card-zoom-text text-xl opacity-100">
              <i className="fa-solid fa-right-to-bracket"></i>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HiddenMenu;
