import React from "react";
import { Link } from "react-router-dom";
import "./hidden-menu.styles.scss"

const HiddenMenu = () => {
  return (
    <div
      id="hidden-menu"
      className="hidden flex flex-row custom-gradient pb-8 justify-center"
    >
      <div
        className="flex p-5 drop-shadow-md sm:hidden"
        id="menu"
      >
        <Link className="text-white hover:text-violet-700 text-md" to="/">
          <div className="drop-shadow-md card-zoom w-16 h-16 rounded-2xl mx-1 bg-black bg-opacity-60 hover:bg-indigo-800">
            <div></div>
            <h1 className="card-zoom-text text-xl opacity-100">
              <i className="fa-solid fa-house"></i>
            </h1>
          </div>
        </Link>
        <Link className="text-white hover:text-violet-700 text-md" to="/shop">
          <div className="drop-shadow-md card-zoom w-16 h-16 rounded-2xl mx-1 bg-black bg-opacity-60 hover:bg-indigo-800">
            <div></div>
            <h1 className="card-zoom-text text-xl opacity-100">
              <i className="fa-brands fa-shopify"></i>
            </h1>
          </div>
        </Link>
        <div className="drop-shadow-md card-zoom w-16 h-16 rounded-2xl mx-1 bg-black bg-opacity-60 hover:bg-indigo-800">
          <div></div>
          <h1 className="card-zoom-text text-xl opacity-100">
            <i className="fa-solid fa-address-book"></i>
          </h1>
        </div>
        <div className="drop-shadow-md card-zoom w-16 h-16 rounded-2xl mx-1 bg-black bg-opacity-60 hover:bg-indigo-800">
          <div></div>
          <h1 className="card-zoom-text text-xl opacity-100">
            <i className="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
        <Link to="/signin">
          <div className="drop-shadow-md card-zoom w-16 h-16 rounded-2xl mx-1 bg-black bg-opacity-60 hover:bg-indigo-800">
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
