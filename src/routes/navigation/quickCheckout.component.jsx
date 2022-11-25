import React, { useContext } from "react";
import CartItem from "./cartitem.component";
import { CartContext } from "../../contexts/cart.context";

const QuickCheckout = () => {
  const { cartItems, cartTotal, cartLength } = useContext(CartContext);

  return (
    <div
      id="quick-checkout"
      className="fixed right-0 z-50 h-[550px] w-[325px] border border-gray-400 bg-gray-200 drop-shadow-lg"
    >
      <div className="flex h-full w-full flex-col">
        <div className="h-4/5 w-full overflow-y-scroll">
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
        <div className="flex h-1/5 w-full flex-col items-center justify-between border border-t-gray-400 p-3">
          <div className="flex w-full justify-between">
            <h2 className="text-gray-700">Subtotal:</h2>
            <h2 className="font-bold text-gray-900">$ {cartTotal}</h2>
          </div>
          <button className="text-md mt-5 w-full bg-gray-900 py-2 text-gray-300">
            CHECKOUT {(cartLength) ? `(${cartLength})` : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickCheckout;
