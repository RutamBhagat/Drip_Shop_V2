import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";

const ShopOriginal = ({ name, index }) => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid px-4 py-[15vh]">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="h-[500px] rounded-xl border border-black bg-cover bg-center bg-no-repeat drop-shadow-lg sm:h-[550px] md:h-[600px]"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                }}
              >
                <div className="custom-gradient-shopSwiper flex h-[100%] w-[100%] items-end justify-center rounded-xl border border-white">
                  <div className="w-[100%] rounded-b-xl bg-white px-3 py-3">
                    <h1 class="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h1>
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
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShopOriginal;
