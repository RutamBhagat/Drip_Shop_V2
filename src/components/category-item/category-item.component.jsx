import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ index, categories }) => {
  return (
    <Fragment>
      <div className="grid-row-reverse grid w-full">
        <div className="grid grid-cols-1 gap-4 p-4 normal:grid-cols-2">
          <Link
            to="/shop/hats"
            className={`card-zoom flex h-[200px] w-[100%] rounded-lg border border-black`}
          >
            <div
              className="absolute h-full w-full transform rounded-lg border border-white bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index].imageUrl})`,
              }}
            ></div>
            <div className="absolute bottom-0 w-[197px] rounded-t-3xl border border-gray-300 bg-black bg-opacity-70 py-1 text-center hover:cursor-pointer hover:opacity-75 normal:left-0 normal:rounded-tl-none normal:rounded-bl-lg">
              <h2 className="text-3xl font-bold text-white">
                {categories[index].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400">Shop Now</p>
            </div>
          </Link>
          <Link
            to="/shop/hats"
            className={`card-zoom flex h-[200px] w-[100%] rounded-lg border border-black`}
          >
            <div
              className="absolute h-full w-full transform rounded-lg border border-white bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index + 1].imageUrl})`,
              }}
            ></div>
            <div className="absolute bottom-0 w-[197px] rounded-t-3xl border border-gray-300 bg-black bg-opacity-70 py-1 text-center hover:cursor-pointer hover:opacity-75 normal:right-0 normal:rounded-tr-none normal:rounded-br-lg">
              <h2 className="text-3xl font-bold text-white">
                {categories[index + 1].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400">Shop Now</p>
            </div>
          </Link>

          <Link
            to="/shop/hats"
            className={`card-zoom flex h-[200px] w-[100%] rounded-lg border border-black normal:col-span-2 normal:h-[300px] ${
              index === 3 ? "order-first" : ""
            }`}
          >
            <div
              className="absolute h-full w-full transform rounded-lg border border-white bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index + 2].imageUrl})`,
              }}
            ></div>
            <div className="absolute bottom-0 w-[197px] rounded-t-3xl border border-gray-300 bg-black bg-opacity-70 py-1 text-center hover:cursor-pointer hover:opacity-75">
              <h2 className="text-3xl font-bold text-white">
                {categories[index + 2].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400">Shop Now</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryItem;
