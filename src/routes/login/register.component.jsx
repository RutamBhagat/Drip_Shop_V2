import React from "react";
import { Link } from "react-router-dom";
import "./login.styles.scss";

const Register = () => {
  return (
    <div className="bg-gray-800 py-24 w-screen ">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-2xl shadow-lg w-full sm:w-3/4 bg-gray-700 sm:mx-0">
          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <div className="w-full md:w-3/4 lg:w-full xl:w-3/4 mx-auto my-10 bg-gray-300 p-8 rounded-xl shadow shadow-slate-300">
              <h1 className="text-4xl font-medium">Sign Up</h1>
              <p className="text-slate-500">Hi, Welcome back 👋</p>
              <form action="" className="mt-10 mb-5">
                <div className="flex flex-col space-y-5">
                  <label htmlFor="name">
                    <p className="font-medium text-slate-700 pb-2">Name</p>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Enter your name"
                    />
                  </label>
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
                  <label htmlFor="confirm-password">
                    <p className="font-medium text-slate-700 pb-2">
                      Confirm Password
                    </p>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                      placeholder="Confirm your password"
                    />
                  </label>
                  <button className="w-full py-3 font-medium text-white bg-violet-800 hover:bg-violet-900 rounded-lg border-violet-800 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <span>Sign Up</span>
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
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-violet-800 hover:text-violet-900 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Sign In </span>
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
            <div className="card-zoom-image bg-store2"></div>
            <h1 className="card-zoom-text">DRIP SHOP</h1>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default Register;
