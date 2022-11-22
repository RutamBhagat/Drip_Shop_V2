import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import PRODUCTS from "../../../shop-data.json";

const ShopOriginal = ({ name, index }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-12">
      <div class="flex w-[300px] items-center justify-between">
        <i class="fa-solid fa-left-long text-white"></i>
        <h1 class="text-white">SWIPE FOR MORE</h1>
        <i class="fa-solid fa-right-long text-white"></i>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-3 pt-0"
      >
        {PRODUCTS &&
          PRODUCTS.map((product) => {
            return (
              <SwiperSlide
                key={product.id}
                className="h-[500px] w-[300px] rounded-xl border border-black bg-cover bg-center bg-no-repeat drop-shadow-lg sm:h-[550px] sm:w-[350px] md:h-[600px] md:w-[400px]"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                }}
              >
                <div className="flex h-[100%] w-[100%] items-end justify-center rounded-xl border border-white hover:bg-black hover:bg-opacity-25">
                  <div className="w-[100%] rounded-b-xl bg-white px-3 py-3">
                    <h1 class="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h1>
                    <p class="mt-2 text-sm text-gray-600">
                      You can&#x27;t buy your future, but you can do it. Money
                      is nothing, you&#x27;r everything.
                    </p>
                    <div class="item-center mt-2 flex">
                      <svg
                        class="h-5 w-5 fill-current text-gray-700"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        class="h-5 w-5 fill-current text-gray-700"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        class="h-5 w-5 fill-current text-gray-700"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        class="h-5 w-5 fill-current text-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                      <svg
                        class="h-5 w-5 fill-current text-gray-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
                      </svg>
                    </div>
                    <div class="item-center mt-3 flex justify-between">
                      <h1 class="text-xl font-bold text-gray-700">{`$${product.price}`}</h1>
                      <button class="ml-1 rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ShopOriginal;
