import React from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./login.styles.scss";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div className="bg-gray-800 py-36 w-screen ">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-2xl shadow-lg w-full sm:w-3/4 bg-gray-700 sm:mx-0">
          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <div className="w-full md:w-3/4 lg:w-full xl:w-3/4 mx-auto my-10 bg-gray-300 p-8 rounded-xl shadow shadow-slate-300">
              <h1 className="text-4xl font-medium">Login</h1>
              <p className="text-slate-500">Hi, Welcome back 👋</p>
              <div className="my-5">
                <button
                  onClick={logGoogleUser}
                  className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                >
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-6 h-6"
                    alt=""
                  />{" "}
                  <span>Login with Google</span>
                </button>
              </div>
              <form action="" className="mt-10 mb-5">
                <div className="flex flex-col space-y-5">
                  <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">
                      Email address
                    </p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter email address"
                    />
                  </label>
                  <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter your password"
                    />
                  </label>
                  <button className="w-full py-3 font-medium text-white bg-violet-800 hover:bg-violet-900 rounded-lg border-violet-800 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <span>Sign In</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                  <p className="text-center">
                    Not registered yet?{" "}
                    <Link
                      to="/register"
                      className="text-violet-800 hover:text-violet-900 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Register now </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:flex w-1/2 card-zoom">
            <div className="card-zoom-image bg-store1"></div>
            <h1 className="card-zoom-text">DRIP SHOP</h1>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default Signin;
