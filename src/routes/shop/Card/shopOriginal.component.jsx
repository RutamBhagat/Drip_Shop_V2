import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import Stars from "../../../components/stars/stars.component";

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
                    <h1 className="text-2xl font-bold text-gray-900">
                      {product.name}
                    </h1>
                    <div className="item-center mt-2 flex">
                      <Stars stars={product.stars} />
                    </div>
                    <div className="item-center mt-3 flex justify-between">
                      <h1 className="text-xl font-bold text-gray-700">{`$${product.price}`}</h1>
                      <button className="ml-1 rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">
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
