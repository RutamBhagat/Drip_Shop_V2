import React from "react";

const ItemsInCart = ({ checkoutArr }) => {
    if (checkoutArr.length !== 0) {
      return (
        <span className="absolute top-0.5 text-white right-0.5 border border-white bg-cyan-900 text-xs py-0.25 px-1 rounded-full">
          {checkoutArr.length}
        </span>
      );
    } else {
      return <span></span>;
    }
  };
  export default ItemsInCart;