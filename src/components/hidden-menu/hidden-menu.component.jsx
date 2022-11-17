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
          <div class="card-zoom w-12 h-12 rounded-2xl mx-2 bg-indigo-900 hover:bg-indigo-700">
            <div></div>
            <h1 class="card-zoom-text text-xl opacity-100">
              <i class="fa-solid fa-house"></i>
            </h1>
          </div>
        </Link>
        <Link className="text-white hover:text-violet-700 text-md" to="/shop">
          <div class="card-zoom w-12 h-12 rounded-2xl mx-2 bg-indigo-900 hover:bg-indigo-700">
            <div></div>
            <h1 class="card-zoom-text text-xl opacity-100">
              <i class="fa-brands fa-shopify"></i>
            </h1>
          </div>
        </Link>
        <div class="card-zoom w-12 h-12 rounded-2xl mx-2 bg-indigo-900 hover:bg-indigo-700">
          <div></div>
          <h1 class="card-zoom-text text-xl opacity-100">
            <i class="fa-solid fa-address-book"></i>
          </h1>
        </div>
        <div class="card-zoom w-12 h-12 rounded-2xl mx-2 bg-indigo-900 hover:bg-indigo-700">
          <div></div>
          <h1 class="card-zoom-text text-xl opacity-100">
            <i class="fa-solid fa-cart-shopping"></i>
          </h1>
        </div>
        <Link to="/signin">
          <div class="card-zoom w-12 h-12 rounded-2xl mx-2 bg-indigo-900 hover:bg-indigo-700">
            <div></div>
            <h1 class="card-zoom-text text-xl opacity-100">
              <i class="fa-solid fa-right-to-bracket"></i>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HiddenMenu;
