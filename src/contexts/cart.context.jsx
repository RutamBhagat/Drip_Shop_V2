import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: null,
  cartLength: null,
  removeItemFromCart: () => {},
  updateItemInCart: () => {}
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

const removeFromCartItem = (cartItems, productToRemove) => {
  const index = cartItems.indexOf(productToRemove);
  cartItems.splice(index, 1);
  return [...cartItems];
};

const updateCartItem = (cartItems, productToUpdate, newQuantity) => {
  return cartItems.map((inst) => {
    if (inst.id === productToUpdate.id) {
      const quantity = Number.parseInt(newQuantity);
      return { ...inst, quantity };
    } else {
      return inst;
    }
  });
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartLength, setCartLength] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
    setCartLength(cartLength + 1);
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeFromCartItem(cartItems, productToRemove));
    setCartTotal(cartTotal - (productToRemove.price * productToRemove.quantity));
    setCartLength(cartLength - Number.parseInt(productToRemove.quantity));
  };

  const updateItemInCart = (productToUpdate, newQuantity) => {
    setCartItems(updateCartItem(cartItems, productToUpdate, newQuantity));
    setCartTotal(
      cartTotal -
        productToUpdate.price * Number.parseInt(productToUpdate.quantity) +
        productToUpdate.price * Number.parseInt(newQuantity)
    );
    setCartLength(cartLength - Number.parseInt(productToUpdate.quantity) + Number.parseInt(newQuantity));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemInCart,
    cartTotal,
    cartLength
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
