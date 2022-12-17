import React from "react";


type ItemsInCartProps = {
  cartLength: number
}

const ItemsInCart = ({ cartLength }: ItemsInCartProps) => {
    if (cartLength !== 0) {
      return (
        <span className="absolute top-0.5 text-white right-0.5 border border-white bg-cyan-900 text-xs py-0.25 px-1 rounded-full">
          {cartLength}
        </span>
      );
    } else {
      return <span></span>;
    }
  };
  export default ItemsInCart;