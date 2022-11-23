import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import HamburgerButtonComponent from "../../components/hamburger-button/hamburger-button.component";
import HiddenMenu from "../../components/hidden-menu/hidden-menu.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="custom-gradient fixed top-0 right-0 left-0 z-50">
        <div className="bg-transparent">
          <div className="mx-auto flex items-center justify-between bg-transparent py-5 px-10 normal:px-3 md:px-10 lg:max-w-[90vw] xl:max-w-[80vw]">
            <HamburgerButtonComponent className="ml-auto" />
            <Link
              className="text-md text-gray-200 hover:text-violet-700"
              to="/"
            >
              <h1 className="bg-white bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer">
                DripShop
              </h1>
            </Link>
            <Link className="normal:hidden" to="/">
              <div className="card-zoom h-12 w-12 rounded-full bg-white drop-shadow-md hover:bg-gray-300">
                <h1 className="card-zoom-text text-sm text-gray-700 opacity-100 hover:text-violet-800">
                  <i className="fa-solid fa-cart-shopping"></i>
                </h1>
              </div>
            </Link>
            <div className="ml-auto hidden items-center space-x-8 text-lg normal:flex lg:space-x-16">
              <Link
                className="text-md font-semibold text-gray-200 hover:text-violet-700"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-md font-semibold text-gray-200 hover:text-violet-700"
                to="/shop"
              >
                Shop
              </Link>
              <a
                href="#"
                className="text-md font-semibold text-gray-200 hover:text-violet-700"
              >
                Contact
              </a>
            </div>
            <div className="ml-auto hidden flex-row normal:flex">
              {currentUser ? (
                <Link to="/">
                  <h1
                    onClick={signOutUser}
                    className="text-text-gray-600 rounded bg-indigo-700 py-2 px-4 font-semibold text-white hover:cursor-pointer"
                  >
                    SIGN OUT
                  </h1>
                </Link>
              ) : (
                <Link to="/authentication">
                  <h1 className="text-text-gray-600 rounded bg-indigo-700 py-2 px-4 font-semibold text-white hover:cursor-pointer">
                    LOG IN
                  </h1>
                </Link>
              )}
              <h1 className="ml-5 py-2 font-semibold text-gray-200 hover:cursor-pointer hover:text-violet-700">
                CART
                <i className="fa-solid fa-cart-shopping px-1"></i>
              </h1>
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
