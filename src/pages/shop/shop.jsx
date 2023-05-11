import React from 'react';
import { PRODUCTS } from '../../assets/products';

import { Product } from './product';
export const Shop = () => {
    return <div className='row'>
        {PRODUCTS.map((product, i) => {
                return <Product data={product} key={i} />;
            })}
    </div>;
}