import React, { useState, Fragment } from "react";
import Stars from "../stars/stars.component";
import ZoomComponent from "./zoom.component";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";
import { addItemToCart } from "../../../store/cart/cart.action";


const IndividualComponent = ({ product }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(cartItems, product))
  };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Fragment>
      <div className="card-zoom h-[500px] rounded-xl drop-shadow-lg sm:h-[550px] md:h-[600px]">
        <div
          onClick={handleZoom}
          className="absolute top-0 h-[90%] w-full transform rounded-xl bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-125"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
          }}
        ></div>
        <i
          onClick={handleZoom}
          className="fa-solid fa-expand absolute top-2 right-2 z-50 rounded-lg bg-black py-1 px-2 text-2xl text-white opacity-50 hover:cursor-pointer"
        ></i>
        <div className="absolute bottom-0 w-[80%] rounded-xl border border-gray-700 bg-white px-3 py-3">
          <h1 className="min-h-[75px] text-2xl font-bold text-gray-900">
            {product.name}
          </h1>
          <div className="flex items-center justify-between">
            <div className="item-center m-1 flex">
              <Stars stars={product.stars} />
            </div>
          </div>
          <div className="item-center mt-3 flex justify-between">
            <h1 className="text-xl font-bold text-gray-700">{`₹${product.price}`}</h1>
            <button
              onClick={handleAddItemToCart}
              className="ml-1 rounded bg-gray-900 px-3 py-2 text-xs font-bold uppercase text-white hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ZoomComponent
        url={product.imageUrl}
        isZoomed={isZoomed}
        handleZoom={handleZoom}
      />
    </Fragment>
  );
};

export default IndividualComponent;
