import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setEmail("");
      setPassword("");
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("Incorrect email or password");
      } else {
        console.log("User log in encountered an error");
        console.error(error);
      }
    }
  };

  return (
    <div className="w-screen bg-gray-900 py-36 ">
      <div className="flex h-full flex-1 flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex h-[800px] w-full rounded-2xl bg-gray-300 shadow-lg sm:mx-0 sm:w-3/4 md:w-5/6 lg:max-w-5xl">
          <div className="flex w-full flex-col justify-center px-10 md:w-1/2 md:px-4 lg:px-10">
            <h1 className="text-4xl font-medium">Login</h1>
            <p className="text-slate-500">Hi, Welcome back 👋</p>
            <div className="my-5">
              <button
                type="button"
                onClick={signInWithGoogle}
                className="my-3 flex w-full items-center justify-center space-x-2 rounded-lg border border-slate-200 py-3 text-center text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="h-6 w-6"
                  alt=""
                />{" "}
                <span>Login with Google</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} action="" className="mt-10 mb-5">
              <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                  <p className="pb-2 font-medium text-slate-700">
                    Email address
                  </p>
                  <input
                    required
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                    placeholder="Enter email address"
                  />
                </label>
                <label htmlFor="password">
                  <p className="pb-2 font-medium text-slate-700">Password</p>
                  <input
                    required
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </label>
                <button className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-violet-800 bg-violet-800 py-3 font-medium text-white hover:bg-violet-900 hover:shadow">
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
                    className="inline-flex items-center space-x-1 font-medium text-violet-800 hover:text-violet-900"
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
          <div className="card-zoom hidden w-1/2 md:flex">
            <div className="card-zoom-image bg-store1"></div>
            <h1 className="card-zoom-text text-center">
              DRIP
              <br />
              SHOP
            </h1>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default Signin;
