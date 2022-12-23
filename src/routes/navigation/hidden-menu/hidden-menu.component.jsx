import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { signOutStart } from "../../../store/user/user.action";


const HiddenMenu = ({ hiddenMenuIsOpen }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div
        id="hidden-menu"
        className={`absolute left-0 right-0 bottom-0 ${
          hiddenMenuIsOpen ? "" : "hidden"
        } h-[90%] w-screen drop-shadow-md normal:hidden`}
      >
        <div className="my-6 flex h-full w-[200px] flex-col justify-between rounded-tr-3xl bg-gray-300 px-5">
          <div>
            <div className="pt-4 text-center">
              <img
                src="https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/cf/92/b7/cf92b74a-b69f-ae07-f9f9-ffa81f044ac2/mza_17416641619049568624.jpg/1200x1200bb.jpg"
                className="m-auto h-28 w-28 rounded-full object-cover"
              />
              <h5 className="mt-4 block text-xl font-semibold text-gray-600">
                {currentUser ? currentUser.displayName : "Guest"}
              </h5>
              <span className="block text-gray-500">User</span>
            </div>

            <ul className="mt-8 h-full">
              <li>
                <Link
                  to="/"
                  className="group relative flex items-center space-x-4 rounded-md bg-gradient-to-r px-4 py-3 text-gray-600"
                >
                  <div className="flex w-6 justify-center">
                    <i className="fa-solid fa-house group-hover:text-cyan-300"></i>
                  </div>
                  <span className="-mr-1 font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                >
                  <div className="flex w-6 justify-center">
                    <i className="fa-solid fa-bag-shopping group-hover:text-cyan-300"></i>
                  </div>
                  <span className="group-hover:text-gray-700">Shop</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                >
                  <div className="flex w-6 justify-center">
                    <i className="fa-solid fa-address-book group-hover:text-cyan-300"></i>
                  </div>
                  <span className="group-hover:text-gray-700">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          {currentUser ? (
            <Link to="/">
              <button className="group mb-10 flex w-full items-center space-x-4 rounded-md px-4 py-3">
                <div className="flex w-6 justify-center">
                  <i className="fa-solid fa-arrow-right-from-bracket text-gray-600 group-hover:text-cyan-500"></i>
                </div>
                <button
                  onClick={signOutUser}
                  className="text-gray-600 group-hover:text-gray-700"
                >
                  Logout
                </button>
              </button>
            </Link>
          ) : (
            <Link to="/authentication">
              <button className="group mb-10 flex w-full items-center space-x-4 rounded-md px-4 py-3">
                <div className="flex w-6 justify-center">
                  <i className="fa-solid fa-arrow-right-from-bracket text-gray-600 group-hover:text-cyan-500"></i>
                </div>
                <span className="text-gray-600 group-hover:text-gray-700">
                  SignIn
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HiddenMenu;
