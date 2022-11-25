import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: null,
  cartLength: null,
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((inst) => {
      if (inst.id === productToAdd.id) {
        const quantity = inst.quantity + 1;
        return { ...inst, quantity };
      } else {
        return inst;
      }
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (accumulator, inst) => accumulator + inst.quantity,
      0
    );
    setCartLength(newCartTotal);
  });

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartTotal,
    cartLength,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
