import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import HiddenMenu from "../../components/hidden-menu/hidden-menu.component";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="shadow">
        <div className="flex justify-between items-center py-6 px-10 sm:px-3 md:px-10 mx-auto">
          <div>
            <Link
              className="text-gray-700 hover:text-violet-700 text-md"
              to="/"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-violet-700 to-gray-900 bg-clip-text text-transparent hover:cursor-pointer">
                DripShop
              </h1>
            </Link>
          </div>

          <div>
            <div
              onClick={() => {
                const hiddenMenu = document.querySelector("#hidden-menu");
                hiddenMenu.classList.toggle("hidden");
              }}
              className="hover:cursor-pointer sm:hidden"
            >
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-violet-700 to-gray-900"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-violet-700 to-gray-900"></spnan>
              <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-violet-700 to-gray-900"></spnan>
            </div>
            <div className="flex items-center">
              <div className="sm:flex space-x-1 md:space-x-4 hidden items-center">
                <Link
                  className="text-gray-700 hover:text-violet-700 text-md"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-700 hover:text-violet-700 text-md"
                  to="/shop"
                >
                  Shop
                </Link>
                <a
                  href="#"
                  className="text-gray-700 hover:text-violet-700 text-md "
                >
                  Contact
                </a>
              </div>

              <div className="sm:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                <h1 className="text-text-gray-600 py-2 hover:cursor-pointer hover:text-violet-700">
                  CART
                  <i className="fa-solid fa-cart-shopping px-1"></i>
                </h1>
                <h1 className="text-text-gray-600 py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-violet-700 to-gray-900">
                  LOG IN
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <HiddenMenu />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
