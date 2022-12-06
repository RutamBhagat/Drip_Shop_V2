import React, { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateItemInCart: () => {},
  cartTotal: null,
  cartLength: null,
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_TOTAL: "SET_CART_TOTAL",
  SET_CART_LENGTH: "SET_CART_LENGTH",
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
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    case CART_ACTION_TYPES.SET_CART_LENGTH:
      return {
        ...state,
        cartLength: payload,
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

  const setCartItems = (cartItems) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: cartItems });
  };

  const setCartTotal = (cartTotal) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: cartTotal });
  };

  const setCartLength = (cartLength) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_LENGTH, payload: cartLength });
  };

  useEffect(() => {
    let total = 0;
    let length = 0;
    for (let inst of cartItems) {
      total += inst.price * inst.quantity;
      length += inst.quantity;
    }
    setCartTotal(total);
    setCartLength(length);
  }, [cartItems]);

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

    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    const removeFromCartItem = (cartItems, productToRemove) => {
      const index = cartItems.indexOf(productToRemove);
      cartItems.splice(index, 1);
      return [...cartItems];
    };

    setCartItems(removeFromCartItem(cartItems, productToRemove));
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

    setCartItems(updateCartItem(cartItems, productToUpdate, newQuantity));
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
