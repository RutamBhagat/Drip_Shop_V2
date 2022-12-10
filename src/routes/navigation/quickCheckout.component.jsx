import React from "react";
import { Link } from "react-router-dom";
import CheckoutCartItem from "../checkout/checkoutCartItem.component";
import EmptyCart from "../checkout/emptyCart.component";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount, selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";


const QuickCheckout = () => {
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartLength = useSelector(selectCartCount)
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  
  const handleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div
      id="quick-checkout"
      className="fixed right-0 z-50 max-h-[550px] w-[325px] border border-gray-400 bg-gray-200 drop-shadow-lg"
    >
      <div className="flex h-full w-full flex-col">
        <ul
          className="max-h-[400px] overflow-y-scroll border-b"
        >
          {cartLength ? (
            cartItems.map((cartItem) => {
              return <CheckoutCartItem key={cartItem.id} cartItem={cartItem} />;
            })
          ) : (
            <EmptyCart />
          )}
        </ul>
        <div className="flex h-1/5 w-full flex-col items-center justify-between border border-t-gray-400 p-3">
          <div className="flex w-full justify-between">
            <h2 className="text-gray-700">Subtotal:</h2>
            <h2 className="font-bold text-gray-900">$ {cartTotal ? cartTotal : 0}</h2>
          </div>
          <Link onClick={handleCartOpen} className="w-full" to="/checkout">
            <button className="text-md mt-5 w-full bg-gray-900 py-2 text-gray-300 hover:bg-gray-700">
              CHECKOUT {cartLength ? `(${cartLength})` : ""}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickCheckout;
