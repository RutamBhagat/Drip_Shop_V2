import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";


const EmptyCart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartLength = useSelector(selectCartCount)

  const handleCartOpen = () => {
    dispatch(setIsCartOpen(false));
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 text-center text-gray-600">
      <h1 className="text-xl">Your Shopping Cart is Empty</h1>
      <Link
        to={"/shop"}
        onClick={handleCartOpen}
        className="pt-3 text-sm hover:cursor-pointer hover:underline hover:decoration-solid"
      >
        <i className="fa-solid fa-circle-chevron-left px-2 text-gray-700"></i>CONTINUE SHOPPING
      </Link>
    </div>
  );
};

export default EmptyCart;
