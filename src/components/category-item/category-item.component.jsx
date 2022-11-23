import React, { Fragment } from "react";

const CategoryItem = ({ index, categories }) => {
  return (
    <Fragment>
      <div class="grid-row-reverse grid w-full">
        <div class="grid grid-cols-1 gap-4 p-4 normal:grid-cols-2">
          <div className={`card-zoom border border-white flex h-[200px] w-[100%] rounded-lg normal:rounded-bl-none`}>
            <div
              className="absolute h-full w-full border border-black rounded-lg transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index].imageUrl})`,
              }}
            ></div>
            <div className="absolute rounded-t-3xl hover:cursor-pointer border border-gray-300 hover:opacity-75 normal:rounded-tl-none bg-black bg-opacity-70 bottom-0 normal:left-0 py-1 w-[197px] text-center">
              <h2 className="text-white font-bold text-3xl">
                {categories[index].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400" >Shop Now</p>
            </div>
          </div>
          <div className={`card-zoom border border-white flex h-[200px] w-[100%] rounded-lg normal:rounded-br-none`}>
            <div
              className="absolute h-full w-full border border-black rounded-lg transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index + 1].imageUrl})`,
              }}
            ></div>
            <div className="absolute rounded-t-3xl hover:cursor-pointer border border-gray-300 hover:opacity-75 normal:rounded-tr-none bg-black bg-opacity-70 bottom-0 normal:right-0 py-1 w-[197px] text-center">
              <h2 className="text-white font-bold text-3xl">
                {categories[index + 1].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400" >Shop Now</p>
            </div>
          </div>
          <div
            className={`card-zoom border border-white flex h-[200px] w-[100%] rounded-lg normal:col-span-2 normal:h-[300px] ${
              index === 3 ? "order-first" : ""
            }`}
          >
            <div
              className="absolute h-full w-full border border-black rounded-lg transform bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
              style={{
                backgroundImage: `url(${categories[index + 2].imageUrl})`,
              }}
            ></div>
            <div className="absolute rounded-t-3xl hover:cursor-pointer border border-gray-300 hover:opacity-75 bg-black bg-opacity-70 bottom-0 py-1 w-[197px] text-center">
              <h2 className="text-white font-bold text-3xl">
                {categories[index + 2].title.toUpperCase()}
              </h2>
              <p className="text-xl text-gray-400" >Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryItem;
