import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import HamburgerButtonComponent from "../../components/hamburger-button/hamburger-button.component";
import HiddenMenu from "../../components/hidden-menu/hidden-menu.component";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 right-0 left-0 z-50">
        <div className="mx-auto flex items-center justify-between bg-white p-5 px-10 sm:px-3 md:px-10">
          <div>
            <Link
              className="text-md text-gray-700 hover:text-violet-700"
              to="/"
            >
              <h1 className="bg-gradient-to-tr from-violet-700 to-gray-900 bg-clip-text text-2xl font-bold text-transparent hover:cursor-pointer">
                DripShop
              </h1>
            </Link>
          </div>
          <div>
            <HamburgerButtonComponent />
            <div className="flex items-center">
              <div className="hidden items-center space-x-1 sm:flex md:space-x-4">
                <Link
                  className="text-md text-gray-700 hover:text-violet-700"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-md text-gray-700 hover:text-violet-700"
                  to="/shop"
                >
                  Shop
                </Link>
                <a
                  href="#"
                  className="text-md text-gray-700 hover:text-violet-700 "
                >
                  Contact
                </a>
              </div>

              <div className="ml-8 hidden items-center space-x-4 sm:flex lg:ml-12">
                <h1 className="text-text-gray-600 py-2 hover:cursor-pointer hover:text-violet-700">
                  CART
                  <i className="fa-solid fa-cart-shopping px-1"></i>
                </h1>
                <Link to="/signin">
                  <h1 className="text-text-gray-600 rounded bg-gradient-to-tr from-violet-700 to-gray-900 py-2 px-4 text-white hover:cursor-pointer">
                    LOG IN
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HiddenMenu />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
