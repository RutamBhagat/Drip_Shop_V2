import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


export const setIsCartOpen = (toggleValue) => createAction(CART_ACTION_TYPES.TOGGLE_CART, toggleValue)

export const addItemToCart = (cartItems, productToAdd) => {
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

    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
    const removeFromCartItem = (cartItems, productToRemove) => {
        const index = cartItems.indexOf(productToRemove);
        cartItems.splice(index, 1);
        return [...cartItems];
    };

    const newCartItems = removeFromCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const emptyItemsInCart = () => {
    const newCartItems = [];
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const updateItemInCart = (cartItems, productToUpdate, newQuantity) => {
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

    const newCartItems = updateCartItem(
        cartItems,
        productToUpdate,
        newQuantity
    );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};