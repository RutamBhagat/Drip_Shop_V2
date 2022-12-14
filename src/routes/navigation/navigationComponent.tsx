import "./navigation.styles.css";
import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import HamburgerButtonComponent from "./hamburger-button/hamburger-button.component";
import HiddenMenu from "./hidden-menu/hidden-menu.component";
import ItemsInCart from "./itemsInCart.components";
import QuickCheckout from "./quickCheckout.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { signOutStart } from "../../store/user/user.action";


const Navigation = () => {
  const dispatch = useDispatch()
  const [hiddenMenuIsOpen, setHiddenMenuIsOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartLength = useSelector(selectCartCount)
  const signOutUser = () => dispatch(signOutStart())

  const handleHiddenMenu = () => {
    setHiddenMenuIsOpen(!hiddenMenuIsOpen);
  };

  const handleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <Fragment>
      <nav
        className={`custom-gradient fixed top-0 right-0 left-0 z-50 normal:h-auto ${
          hiddenMenuIsOpen ? "h-screen" : ""
        }`}
      >
        <div className="bg-transparent">
          <div className="mx-auto flex items-center justify-between bg-transparent py-5 px-10 normal:px-3 md:px-10 max-w-6xl">
            <HamburgerButtonComponent hiddenMenuIsOpen={hiddenMenuIsOpen} handleHiddenMenu={handleHiddenMenu} />
            <Link
              className="text-md text-gray-200 hover:text-violet-700"
              to="/"
            >
              <h1 className="bg-white bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer">
                DripShop
              </h1>
            </Link>
            <button
              onClick={handleCartOpen}
              className="relative h-12 w-12 rounded-full border-2 border-transparent bg-white text-xl text-gray-800 transition duration-150 ease-in-out hover:text-violet-900 normal:hidden"
              aria-label="Cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <ItemsInCart cartLength={cartLength} />
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
              <Link
                className="text-md font-semibold text-gray-200 hover:text-violet-700"
                to="/contacts"
              >
                Contact
              </Link>
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
                onClick={handleCartOpen}
                className="relative ml-5 py-2 px-2 font-semibold text-gray-200 hover:cursor-pointer hover:text-violet-700"
              >
                CART
                <i className="fa-solid fa-cart-shopping px-1"></i>
                <ItemsInCart cartLength={cartLength} />
              </button>
            </div>
          </div>
        </div>
        {isCartOpen && <QuickCheckout />}
        <HiddenMenu hiddenMenuIsOpen={hiddenMenuIsOpen} />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
