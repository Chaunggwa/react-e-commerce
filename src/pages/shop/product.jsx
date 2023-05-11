import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop_context';
export const Product = ({data}) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const {id, productName, price, productImage } = data;
    const itemAmount = cartItems[id];
    return (
      <div className='col-sm-4 col-md-3 col-lg-2 my-2'>
        <div className='card text-center'>
            <img src={productImage} class="card-img-top" alt="Product" />
            <div class="card-body">
            <h5 class="card-title">{productName}</h5>
             <p class="card-text fs-4">$ {price}</p>
           </div>
           <button className='btn btn-secondary' onClick={() => addToCart(id)}>Add To Cart <span class="badge bg-info">{itemAmount > 0 &&<>{itemAmount}</>}</span></button>
           </div>
      </div>
    );
} 