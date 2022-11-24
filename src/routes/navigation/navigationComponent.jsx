import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import HamburgerButtonComponent from "../../components/hamburger-button/hamburger-button.component";
import HiddenMenu from "../../components/hidden-menu/hidden-menu.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.css";
import ItemsInCart from "./itemsInCart.components";
import QuickCheckout from "./quickCheckout.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleQuickCheckout = () => {
    const quickCheckout = document.querySelector("#quick-checkout");
    quickCheckout.classList.toggle("hidden");
  };

  return (
    <Fragment>
      <nav
      id="nav-bar"
      className="custom-gradient fixed top-0 right-0 left-0 normal:h-auto z-50">
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
            <button
              onClick={handleQuickCheckout}
              className="hover:text-violet-900 relative h-12 w-12 rounded-full border-2 border-transparent bg-white text-xl text-gray-800 transition duration-150 ease-in-out normal:hidden"
              aria-label="Cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <ItemsInCart checkoutArr={[11]} />
            </button>
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
              <button
                onClick={handleQuickCheckout}
                className="ml-5 py-2 font-semibold text-gray-200 hover:cursor-pointer hover:text-violet-700"
              >
                CART
                <i className="fa-solid fa-cart-shopping px-1"></i>
              </button>
            </div>
          </div>
        </div>
        <QuickCheckout />
        <HiddenMenu />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
