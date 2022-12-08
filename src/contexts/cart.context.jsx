import React, { createContext, useReducer } from "react";
import { createAction } from '../utils/firebase/reducer/reducer.utils';

export const CartContext = createContext({
  isCartOpen: null,
  cartItems: [],
  cartTotal: null,
  cartLength: null,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemInCart: () => {},
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartLength: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartTotal, cartLength } = state;

  const setIsCartOpen = (toggleValue) => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: toggleValue });
  };

  const updateCartItemsReducer = (cartItems) => {
    let total = 0;
    let length = 0;
    for (let inst of cartItems) {
      total += inst.price * inst.quantity;
      length += inst.quantity;
    }

    const payload = {
      cartItems: cartItems,
      cartLength: length,
      cartTotal: total,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload))
  };

  const addItemToCart = (productToAdd) => {
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

    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const removeFromCartItem = (cartItems, productToRemove) => {
      const index = cartItems.indexOf(productToRemove);
      cartItems.splice(index, 1);
      return [...cartItems];
    };

    const newCartItems = removeFromCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems);
  };

  const updateItemInCart = (productToUpdate, newQuantity) => {
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

    const newCartItems = updateCartItem(cartItems, productToUpdate, newQuantity)
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    cartTotal,
    cartLength,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    updateItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
