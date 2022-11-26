import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutCartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, updateItemInCart } = useContext(CartContext);

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(cartItem);
  };

  const hangleUpdateItemInCart = (newQuantity) => {
    updateItemInCart(cartItem, newQuantity);
  };

  return (
    <div className="mx-1 my-1.5 flex rounded-lg shadow-lg">
      <div className="flex w-full justify-between">
        <div
          className="w-2/3 max-w-[250px]  bg-cover rounded-l-lg"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="flex w-2/3 max-w-[400px] h-[200px] flex-row justify-between p-3">
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-bold text-gray-700">{name}</h1>
            <div className="relative w-[70px]">
              <select
                onChange={(event) => {
                  hangleUpdateItemInCart(event.target.value);
                }}
                value={quantity}
                className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                {[...Array(10).keys()].map((inst) => (
                  <option value={inst + 1}>{inst + 1}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-0 top-0 flex h-full w-8 items-center justify-center text-center text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <i
              onClick={handleRemoveItemFromCart}
              class="fa-regular fa-trash-can ml-auto text-lg text-gray-600"
            ></i>

            <h1 className="text-normal font-semibold text-amber-900 md:text-xl">
              ${price * quantity}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
