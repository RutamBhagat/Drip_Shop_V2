import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const HiddenMenu = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div
      id="hidden-menu"
      className="flex hidden h-[92vh] w-screen flex-col items-start justify-start p-5 pb-8 drop-shadow-md normal:hidden"
    >
      <Link className="text-md my-2 ml-2 flex" to="/">
        <div className="card-zoom mr-3 h-16 w-16 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-700 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-house"></i>
          </h1>
        </div>
        <div className=" flex items-center justify-center text-white">
          <h1 className="text-xl font-semibold">HOME</h1>
        </div>
      </Link>
      <Link className="text-md my-2 ml-2 flex" to="/shop">
        <div className="card-zoom mr-3 h-16 w-16 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-700 opacity-100 hover:text-violet-800">
            <i className="fa-brands fa-shopify"></i>
          </h1>
        </div>
        <div className=" flex items-center justify-center text-white">
          <h1 className="text-xl font-semibold">SHOP</h1>
        </div>
      </Link>
      <Link className="text-md my-2 ml-2 flex" to="/">
        <div className="card-zoom mr-3 h-16 w-16 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
          <h1 className="card-zoom-text text-2xl text-gray-700 opacity-100 hover:text-violet-800">
            <i className="fa-solid fa-address-book"></i>
          </h1>
        </div>
        <div className=" flex items-center justify-center text-white">
          <h1 className="text-xl font-semibold">CONTACT</h1>
        </div>
      </Link>
      {currentUser ? (
        <Link
          className="text-md my-2 ml-2 mt-auto flex"
          to="/"
          onClick={signOutUser}
        >
          <div className="card-zoom mr-3 h-16 w-16 rounded-2xl bg-red-600 drop-shadow-md hover:bg-red-500">
            <h1 className="card-zoom-text text-2xl text-gray-300 opacity-100 hover:text-gray-900">
              <i className="fa-solid fa-right-to-bracket"></i>
            </h1>
          </div>
          <div className=" flex items-center justify-center text-white">
            <h1 className="text-xl font-semibold">SIGN OUT</h1>
          </div>
        </Link>
      ) : (
        <Link className="text-md my-2 ml-2 mt-auto flex" to="/authentication">
          <div className="card-zoom mr-3 h-16 w-16 rounded-2xl bg-lime-600 drop-shadow-md hover:bg-lime-400">
            <h1 className="card-zoom-text text-2xl text-gray-300 opacity-100 hover:text-gray-900">
              <i className="fa-solid fa-right-to-bracket"></i>
            </h1>
          </div>
          <div className=" flex items-center justify-center text-white">
            <h1 className="text-xl font-semibold">SIGN IN</h1>
          </div>
        </Link>
      )}
    </div>
  );
};

export default HiddenMenu;
