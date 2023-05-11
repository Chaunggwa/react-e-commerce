import React from 'react';
import {PRODUCTS} from "../../assets/products";
import { ShopContext} from "../../context/shop_context";
import { useContext } from "react";
import { CartItem } from './cartItem';
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return <div>
            <div>
                <h1 className='text-center my-3'>Your Cart Items</h1>
                <div className='row'>
                    {
                        PRODUCTS.map((product, i) => {
                            if (cartItems[product.id] !== 0) {
                               return <CartItem data={product} key={i} />
                            }
                        })
                    } 
                </div>
            </div>
            {totalAmount > 0 ?
            <div className='container my-3'>
                <p className='fw-bold text-center fs-3 text-info'>Subtotal: ${totalAmount}</p>
                <div className='d-flex justify-content-center'>
                <button className='btn btn-dark mx-4' onClick={() => navigate("/")}>Continue Shopping</button>
                <button className="btn btn-dark">Checkout</button>
                </div>
            </div>
            : <div className='text-center fs-3 text-danger'>Your cart is empty! Shop Now!</div>
            }
        </div>
}