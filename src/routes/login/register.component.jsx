import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error");
        console.error(error);
      }
    }
  };

  return (
    <div className="bg-gray-800 py-36 w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-2xl shadow-lg w-full sm:w-3/4 lg:max-w-5xl bg-gray-300 sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-10 md:p-4 lg:p-10">
            <h1 className="text-4xl font-medium">Sign Up</h1>
            <p className="text-slate-500">Hi, Welcome 👋</p>
            <form onSubmit={handleSubmit} action="" className="mt-10 mb-5">
              <div className="flex flex-col space-y-5">
                <label htmlFor="name">
                  <p className="font-medium text-slate-700 pb-2">Name</p>
                  <input
                    onChange={(event) => {
                      setDisplayName(event.target.value);
                    }}
                    required
                    id="name"
                    name="name"
                    type="text"
                    value={displayName}
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter your name"
                  />
                </label>
                <label htmlFor="email">
                  <p className="font-medium text-slate-700 pb-2">
                    Email address
                  </p>
                  <input
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter email address"
                  />
                </label>
                <label htmlFor="password">
                  <p className="font-medium text-slate-700 pb-2">Password</p>
                  <input
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter your password"
                  />
                </label>
                <label htmlFor="confirm-password">
                  <p className="font-medium text-slate-700 pb-2">
                    Confirm Password
                  </p>
                  <input
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    required
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={confirmPassword}
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Confirm your password"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white bg-violet-800 hover:bg-violet-900 rounded-lg border-violet-800 hover:shadow inline-flex space-x-2 items-center justify-center"
                >
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
          <div className="hidden md:flex w-1/2 card-zoom">
            <div className="card-zoom-image bg-store2"></div>
            <h1 className="card-zoom-text lg:text-5xl">DRIP SHOP</h1>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default Register;
