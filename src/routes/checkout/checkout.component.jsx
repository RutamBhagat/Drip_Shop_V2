import React from "react";

const Checkout = () => {
  const removeWarning = () => {
    const warning = document.querySelector("#checkout-warning");
    warning.classList.toggle("hidden");
  };

  return (
    <div className="py-36">
      <div className="grid h-screen lg:grid-cols-3">
        <div className="mx-3 sm:mx-12 lg:mx-0 lg:order-2 col-span-1 bg-white">
          <h1 className="border-b-2 py-6 px-8 text-xl text-gray-600">
            Order Summary
          </h1>
          <ul className="space-y-6 border-b py-6 px-8">
            <li className="border-b-1 grid grid-cols-6 gap-2">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3oW8yej"
                  alt="Product"
                  className="w-full rounded"
                />
              </div>
              <div className="col-span-3 flex flex-col pt-2">
                <span className="text-md font-semi-bold text-gray-600">
                  Studio 2 Headphone
                </span>
                <span className="inline-block pt-2 text-sm text-gray-400">
                  Red Headphone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center justify-between space-x-2 text-sm">
                  <span className="text-gray-400">2 x €30.99</span>
                  <span className="inline-block font-semibold text-amber-900">
                    €61.98
                  </span>
                </div>
              </div>
            </li>
            <li className="border-b-1 grid grid-cols-6 gap-2">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3lCyoSx"
                  alt="Product"
                  className="w-full rounded"
                />
              </div>
              <div className="col-span-3 flex flex-col pt-2">
                <span className="text-md font-semi-bold text-gray-600">
                  Apple iPhone 13
                </span>
                <span className="inline-block pt-2 text-sm text-gray-400">
                  Phone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center justify-between space-x-2 text-sm">
                  <span className="text-gray-400">1 x €785</span>
                  <span className="inline-block font-semibold text-amber-900">
                    €785
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="border-b px-8">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-amber-900">€846.98</span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-amber-900">Free</span>
            </div>
          </div>
          <div className="flex justify-between px-8 py-8 text-xl font-semibold text-gray-600">
            <span>Total</span>
            <span>€846.98</span>
          </div>
        </div>
        <div className="col-span-1 space-y-8 bg-gray-800 px-12 lg:col-span-2">
          <div
            id="checkout-warning"
            className="relative mt-8 flex flex-col rounded-md bg-white p-4 shadow sm:flex-row sm:items-center"
          >
            <div className="flex w-full flex-row items-center border-b pb-4 sm:w-auto sm:border-b-0 sm:pb-0">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3 text-sm font-medium">Checkout</div>
            </div>
            <div className="mt-4 text-sm tracking-wide text-gray-500 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div
              onClick={removeWarning}
              className="absolute right-4 top-4 ml-auto cursor-pointer text-gray-400 hover:text-gray-800 sm:relative sm:top-auto sm:right-auto"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="rounded-md">
            <form id="payment-form" method="POST" action="">
              <section>
                <h2 className="my-2 text-lg font-semibold uppercase tracking-wide text-gray-300">
                  Shipping & Billing Information
                </h2>
                <fieldset className="mb-3 rounded bg-white text-gray-600 shadow-lg">
                  <label className="flex h-12 items-center border-b border-gray-200 py-3">
                    <span className="px-2 text-right">Name</span>
                    <input
                      name="name"
                      className="px-3 focus:outline-none"
                      placeholder="Anonymous"
                      required=""
                    />
                  </label>
                  <label className="flex h-12 items-center border-b border-gray-200 py-3">
                    <span className="px-2 text-right">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="px-3 focus:outline-none"
                      placeholder="namelessone@gmail.com"
                      required=""
                    />
                  </label>
                  <label className="flex h-12 items-center border-b border-gray-200 py-3">
                    <span className="px-2 text-right">Address</span>
                    <input
                      name="address"
                      className="px-3 focus:outline-none"
                      placeholder="Malabar Hill S.O."
                    />
                  </label>
                  <label className="flex h-12 items-center border-b border-gray-200 py-3">
                    <span className="px-2 text-right">City</span>
                    <input
                      name="city"
                      className="px-3 focus:outline-none"
                      placeholder="Mumbai"
                    />
                  </label>
                  <label className="inline-flex w-2/4 border-gray-200 py-3">
                    <span className="px-2 text-right">State</span>
                    <input
                      name="state"
                      className="px-3 focus:outline-none"
                      placeholder="MAHARASHTRA"
                    />
                  </label>
                  <label className="flex items-center border-t border-gray-200 py-3 xl:inline-flex xl:w-1/4 xl:border-none">
                    <span className="xl:text-none px-2 text-right xl:px-0">
                      ZIP
                    </span>
                    <input
                      name="postal_code"
                      className="px-3 focus:outline-none"
                      placeholder="400006"
                    />
                  </label>
                  <label className="select relative flex h-12 items-center border-t border-gray-200 py-3">
                    <span className="px-2 text-right">Country</span>
                    <div
                      id="country"
                      className="flex w-full items-center px-3 focus:outline-none"
                    >
                      <select
                        name="country"
                        className="flex-1 cursor-pointer appearance-none border-none bg-transparent focus:outline-none"
                      >
                        <option value="AU">Australia</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IN">India</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MX">Mexico</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="SG">Singapore</option>
                        <option value="ES">Spain</option>
                        <option value="TN">Tunisia</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US" defaultValue="selected">
                          United States
                        </option>
                      </select>
                    </div>
                  </label>
                </fieldset>
              </section>
            </form>
          </div>
          <div className="rounded-md">
            <section>
              <h2 className="my-2 text-lg font-semibold uppercase tracking-wide text-gray-300">
                Payment Information
              </h2>
              <fieldset className="mb-3 rounded bg-white text-gray-600 shadow-lg">
                <label className="flex h-12 items-center border-b border-gray-200 py-3">
                  <span className="px-2 text-right">Card</span>
                  <input
                    name="card"
                    className="w-full px-3 focus:outline-none"
                    placeholder="Card number MM/YY CVC"
                    required=""
                  />
                </label>
              </fieldset>
            </section>
          </div>
          <button className="submit-button w-full rounded-full bg-amber-600 px-4 py-3 text-xl font-semibold text-white transition-colors focus:outline-none focus:ring">
            Pay €846.98
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
