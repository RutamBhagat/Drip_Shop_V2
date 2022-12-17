import React, { useRef } from "react";

const Warning = () => {
  const warningRef = useRef<HTMLDivElement>(null!);

  const removeWarning = () => {
    warningRef.current.classList.toggle("hidden");
  };
  return (
    <div
      ref={warningRef}
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
  );
};

export default Warning;
