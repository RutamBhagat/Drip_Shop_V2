import React, { useState, Fragment } from "react";
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
    <Fragment>
      <div className="flex w-full flex-col justify-center px-10 md:w-1/2 md:px-4 lg:px-10">
        <h1 className="text-4xl font-medium">Sign Up</h1>
        <p className="text-slate-500">Hi, Welcome 👋</p>
        <form onSubmit={handleSubmit} action="" className="mt-10 mb-5">
          <div className="flex flex-col space-y-5">
            <label htmlFor="name">
              <p className="pb-2 font-medium text-slate-700">Name</p>
              <input
                onChange={(event) => {
                  setDisplayName(event.target.value);
                }}
                required
                id="name"
                name="name"
                type="text"
                value={displayName}
                className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email">
              <p className="pb-2 font-medium text-slate-700">Email address</p>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
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
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
                id="password"
                name="password"
                type="password"
                value={password}
                className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </label>
            <label htmlFor="confirm-password">
              <p className="pb-2 font-medium text-slate-700">
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
                className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                placeholder="Confirm your password"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-violet-800 bg-violet-800 py-3 font-medium text-white hover:bg-violet-900 hover:shadow"
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
                to="/authentication"
                className="inline-flex items-center space-x-1 font-medium text-violet-800 hover:text-violet-900"
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
      <div className="card-zoom hidden w-1/2 md:flex">
        <div className="card-zoom-image bg-store2"></div>
        <h1 className="card-zoom-text text-center">
          DRIP
          <br />
          SHOP
        </h1>
      </div>
    </Fragment>
  );
};

export default Register;
