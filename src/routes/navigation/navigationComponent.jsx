import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import HamburgerButtonComponent from "../../components/hamburger-button/hamburger-button.component";
import HiddenMenu from "../../components/hidden-menu/hidden-menu.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <nav className="fixed top-0 right-0 left-0 z-50 bg-transparent">
        <div className="bg-white">
          <div className="mx-auto flex items-center justify-between bg-white py-5 px-10 normal:px-3 md:px-10 lg:max-w-[90vw] xl:max-w-[80vw]">
            <Link
              className="text-md text-gray-700 hover:text-violet-700"
              to="/"
            >
              <h1 className="bg-gradient-to-tr from-violet-700 to-gray-900 bg-clip-text text-4xl font-bold text-transparent hover:cursor-pointer">
                DripShop
              </h1>
            </Link>
            <HamburgerButtonComponent className="ml-auto" />
            <div className="ml-auto hidden items-center space-x-8 text-lg normal:flex lg:space-x-16">
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
            <div className="ml-auto hidden flex-row normal:flex">
              <h1 className="mr-5 py-2 text-gray-600 hover:cursor-pointer hover:text-violet-700">
                CART
                <i className="fa-solid fa-cart-shopping px-1"></i>
              </h1>
              {currentUser ? (
                <Link to="/">
                  <h1
                    onClick={signOutHandler}
                    className="text-text-gray-600 rounded bg-gradient-to-tr from-violet-700 to-gray-900 py-2 px-4 text-white hover:cursor-pointer"
                  >
                    SIGN OUT
                  </h1>
                </Link>
              ) : (
                <Link to="/signin">
                  <h1 className="text-text-gray-600 rounded bg-gradient-to-tr from-violet-700 to-gray-900 py-2 px-4 text-white hover:cursor-pointer">
                    LOG IN
                  </h1>
                </Link>
              )}
            </div>
          </div>
        </div>
        <HiddenMenu signOutHandler={signOutHandler} />
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
