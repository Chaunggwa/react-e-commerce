import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop_context';

export const CartItem = ({data}) => {
    const {id, productName, price, productImage} = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    return (
        <div className='col-sm-4 col-md-3 col-lg-2 my-2'>
            <div className="card text-center">
        <img src={productImage} alt="item" className='card-image-top' />
        <div className='card-body'>
            <p className='card-title'><b>{productName}</b></p>
            <p className='card-text fw-bold fs-4'>${price}</p>
            <div className='row'>
                <button className='col btn btn-outline-dark' onClick={()=> removeFromCart(id)}>-</button>
                <input className='col text-center form-control text-dark fw-bold' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                <button className='col btn btn-outline-dark' onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
        </div>
    );
}