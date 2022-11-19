import React from "react";
import { Link } from "react-router-dom";
import "./hidden-menu.styles.scss";

const HiddenMenu = () => {
  return (
    <div
      id="hidden-menu"
      className="custom-gradient flex hidden h-[90vh] w-screen flex-col items-end justify-start p-5 pb-8 drop-shadow-md sm:hidden"
    >
      <Link className="text-md my-2" to="/">
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-white bg-opacity-60 drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-800 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-house"></i>
          </h1>
        </div>
      </Link>
      <Link className="text-md my-2" to="/shop">
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-white bg-opacity-60 drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-800 opacity-100 hover:text-violet-800">
            <i className="fa-brands fa-shopify"></i>
          </h1>
        </div>
      </Link>
      <Link className="text-md my-2" to="/">
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-white bg-opacity-60 drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-800 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-address-book"></i>
          </h1>
        </div>
      </Link>
      <Link className="text-md my-2 mt-auto" to="/">
        <div className="card-zoom mx-1 mt-auto h-16 w-16 rounded-2xl bg-white bg-opacity-60 drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-800 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
      </Link>
      <Link className="text-md my-2" to="/signin">
        <div className="card-zoom mx-1 h-16 w-16 rounded-2xl bg-white bg-opacity-60 drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-800 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-right-to-bracket"></i>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default HiddenMenu;
