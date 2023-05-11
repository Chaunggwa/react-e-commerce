import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../assets/products';

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContext = createContext();
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId)=> {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateCartItemCount = (newAmount, id ) => {
        setCartItems((prev) => ({...prev, [id]: newAmount}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
               let itemInfo = PRODUCTS.find((product) => product.id === Number(item)); 
               totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }
    const getTotalItem = () =>{
        let totalItem = 0;
        for (const item in cartItems) {
            totalItem += cartItems[item];
        }
        return totalItem;
        
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getTotalItem};

        return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}

