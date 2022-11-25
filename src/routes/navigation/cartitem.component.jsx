import React from "react";

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <div className="m-1 flex max-w-md overflow-hidden rounded-lg shadow-lg">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            `url(${imageUrl})`,
        }}
      ></div>
      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-2xl font-bold text-gray-700">{name}</h1>
        <div className="mt-2 flex justify-between">
          <h1 className="font-semibold text-gray-700">Qty: {quantity}</h1>
          <h1 className="text-lg font-bold text-gray-700 md:text-xl">${price * quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
