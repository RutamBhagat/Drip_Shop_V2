import { CART_ACTION_TYPES } from "./cart.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem } from "./cart.types";


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.TOGGLE_CART, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))


export const setIsCartOpen = withMatcher((toggleValue: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.TOGGLE_CART, toggleValue))

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === productToAdd.id
        );
        if (existingCartItem) {
            return cartItems.map((inst) => {
                if (inst.id === productToAdd.id) {
                    if(inst.quantity === 10){
                        return inst;
                    }
                    else{
                        const quantity = inst.quantity + 1;
                        return { ...inst, quantity };
                    }
                } else {
                    return inst;
                }
            });
        }
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    };

    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const updateItemInCart = (cartItems: CartItem[], productToUpdate: CartItem, newQuantity: string) => {
    const updateCartItem = (cartItems: CartItem[], productToUpdate: CartItem, newQuantity: string): CartItem[] => {
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
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const removeFromCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
        const index = cartItems.indexOf(productToRemove);
        cartItems.splice(index, 1);
        return [...cartItems];
    };

    const newCartItems = removeFromCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
};

export const emptyItemsInCart = () => {
    const newCartItems: CartItem[] = [];
    return setCartItems(newCartItems);
};