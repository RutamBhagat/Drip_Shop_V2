import React, { useContext } from "react";
import { ZoomContext } from "../../../contexts/zoom.context";

const ZoomComponent = () => {
  const { zoomUrl, isZoomed, setIsZoomed } = useContext(ZoomContext);
  const handleZoom = () => setIsZoomed(false);

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen items-center justify-center bg-black bg-opacity-[90%] ${
        isZoomed ? "" : "hidden"
      }`}
    >
      <div className="flex justify-center w-[90%] h-[90%] scroll whitespace-nowrap scroll-smooth overflow-scroll bg-white bg-opacity-25">
        <img
          className=" m-auto"
          // src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          // src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          src={zoomUrl}
        />
        <button
          onClick={handleZoom}
          type="button"
          className="absolute top-3 right-5 ml-auto inline-flex items-center rounded-lg bg-gray-300 p-1.5 text-sm text-gray-900 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="popup-modal"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-darkreader-inline-fill=""
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
    </div>
  );
};

export default ZoomComponent;
