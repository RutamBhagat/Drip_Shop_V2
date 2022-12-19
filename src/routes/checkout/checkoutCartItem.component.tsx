import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { removeItemFromCart, updateItemInCart } from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";


type CheckoutCartItem = {
  cartItem: CartItem
}

const CheckoutCartItem = ({ cartItem }: CheckoutCartItem) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  };

  const hangleUpdateItemInCart = (newQuantity: string) => {
    dispatch(updateItemInCart(cartItems, cartItem, newQuantity))
  };

  return (
    <div className="mx-1 p-1 my-1.5 w-full max-w-4xl flex rounded-lg shadow-lg">
      <div className="flex w-full justify-between">
        <div
          className="w-2/3 max-w-[250px] h-[250px]  rounded-l-lg"
        >
          <img className="w-full h-full object-cover" src={imageUrl} />
        </div>
        <div className="flex h-[200px] w-2/3 max-w-[400px] flex-row justify-between p-3">
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
                  <option key={Math.random()} value={inst + 1}>{inst + 1}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-0 top-0 flex h-full w-8 items-center justify-center text-center text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
              className="fa-regular fa-trash-can ml-auto text-lg text-gray-600"
            ></i>

            <h1 className="text-normal font-semibold text-amber-900 md:text-xl">
              ₹{price * quantity}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
