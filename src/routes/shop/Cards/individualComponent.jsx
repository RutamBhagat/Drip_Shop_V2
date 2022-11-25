import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import Stars from "../../../components/stars/stars.component";

const IndividualComponent = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const handleAddItemToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="card-zoom h-[500px] rounded-xl drop-shadow-lg sm:h-[550px] md:h-[600px]">
      <div
        className="absolute top-0 h-[90%] w-full transform rounded-xl bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
        style={{
          backgroundImage: `url(${product.imageUrl})`,
        }}
      ></div>
      <div className="absolute bottom-0 w-[80%] rounded-xl border border-gray-700 bg-white px-3 py-3">
        <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
        <div className="item-center mt-2 flex">
          <Stars stars={product.stars} />
        </div>
        <div className="item-center mt-3 flex justify-between">
          <h1 className="text-xl font-bold text-gray-700">{`$${product.price}`}</h1>
          <button
            onClick={handleAddItemToCart}
            className="ml-1 rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualComponent;
