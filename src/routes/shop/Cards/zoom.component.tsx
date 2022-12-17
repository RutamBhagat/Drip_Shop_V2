import React from "react";


type ZoomComponentProps = {
  url: string,
  isZoomed: boolean,
  handleZoom: () => void
}

const ZoomComponent = ({ url, isZoomed, handleZoom }: ZoomComponentProps) => {

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen items-center justify-center bg-black bg-opacity-[90%] ${
        isZoomed ? "" : "hidden"
      }`}
    >
      <div className="scroll mx-3 flex h-[90%] max-w-5xl justify-center overflow-y-scroll scroll-smooth whitespace-nowrap md:mx-10 lg:mx-20">
        <img className=" m-auto" src={url} />
      </div>
      <button
        onClick={handleZoom}
        type="button"
        className="absolute top-5 right-5 ml-auto inline-flex items-center rounded-lg border border-gray-700 bg-gray-300 p-1.5 text-sm text-gray-900 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white md:top-12 md:right-12"
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
  );
};

export default ZoomComponent;
