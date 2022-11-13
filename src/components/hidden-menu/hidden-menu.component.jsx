import React from "react";
import { Link } from "react-router-dom";

const HiddenMenu = () => {
  return (
    <div id="hidden-menu" className="hidden">
      <div
        className="flex flex-col items-center self-end pb-5 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        id="menu"
      >
        <Link className="text-gray-700 hover:text-violet-700 text-md" to="/">
          Home
        </Link>
        <Link
          className="text-gray-700 hover:text-violet-700 text-md"
          to="/shop"
        >
          Shop
        </Link>
        <a href="#" className="text-gray-700 hover:text-violet-700 text-md ">
          Contact
        </a>
        <h1 className="text-text-gray-600 hover:cursor-pointer hover:text-violet-700">
          CART
          <i className="fa-solid fa-cart-shopping px-2"></i>
        </h1>
        <h1 className="text-text-gray-600  py-1 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-violet-700 to-gray-900">
          LOG IN
        </h1>
      </div>
    </div>
  );
};

export default HiddenMenu;
