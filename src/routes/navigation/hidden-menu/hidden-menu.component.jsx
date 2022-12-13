import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from '../../../store/user/user.selector';
import { signOutStart } from "../../../store/user/user.action";

const HiddenMenu = ({hiddenMenuIsOpen}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart())

  return (
    <div
      id="hidden-menu"
      className={`absolute left-0 right-0 bottom-0 ${hiddenMenuIsOpen ? "" : "hidden"} h-[90%] w-screen drop-shadow-md normal:hidden`}
    >
      <div className="flex h-full flex-col w-[200px] rounded-tr-3xl bg-gray-700 px-5 py-2">
        <Link className="text-md my-2 flex" to="/">
          <div className="card-zoom mr-3 h-12 w-12 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
            <i className="fa-solid fa-house card-zoom-text text-lg text-gray-700 opacity-100 hover:text-violet-900"></i>
          </div>
          <div className=" flex items-center justify-center text-white">
            <h1 className="text-lg font-normal">HOME</h1>
          </div>
        </Link>
        <Link className="text-md my-2 flex" to="/shop">
          <div className="card-zoom mr-3 h-12 w-12 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
            <i className="fa-brands fa-shopify card-zoom-text text-lg text-gray-700 opacity-100 hover:text-violet-900"></i>
          </div>
          <div className=" flex items-center justify-center text-white">
            <h1 className="text-lg font-normal">SHOP</h1>
          </div>
        </Link>
        <Link className="text-md my-2 flex" to="/">
          <div className="card-zoom mr-3 h-12 w-12 rounded-2xl bg-white drop-shadow-md hover:bg-gray-300">
            <i className="fa-solid fa-address-book card-zoom-text text-lg text-gray-700 opacity-100 hover:text-violet-900"></i>
          </div>
          <div className=" flex items-center justify-center text-white">
            <h1 className="text-lg font-normal">CONTACT</h1>
          </div>
        </Link>
        {currentUser ? (
          <Link
            className="text-md my-2 mt-auto flex"
            to="/"
            onClick={signOutUser}
          >
            <div className="card-zoom mr-3 h-12 w-12 rounded-2xl bg-red-600 drop-shadow-md hover:bg-red-500">
              <h1 className="card-zoom-text text-lg text-gray-300 opacity-100 hover:text-gray-900">
                <i className="fa-solid fa-right-to-bracket"></i>
              </h1>
            </div>
            <div className=" flex items-center justify-center text-white">
              <h1 className="text-lg font-normal">SIGN OUT</h1>
            </div>
          </Link>
        ) : (
          <Link className="text-md my-2 mt-auto flex" to="/authentication">
            <div className="card-zoom mr-3 h-12 w-12 rounded-2xl bg-lime-600 drop-shadow-md hover:bg-lime-400">
              <h1 className="card-zoom-text text-lg text-gray-300 opacity-100 hover:text-gray-900">
                <i className="fa-solid fa-right-to-bracket"></i>
              </h1>
            </div>
            <div className=" flex items-center justify-center text-white">
              <h1 className="text-lg font-normal">SIGN IN</h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HiddenMenu;
