import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import "./shop.css";
import { GoogleLogin } from '@react-oauth/google';

export const Shop = () => {
    return (
        <div className='shop'>
            
            <div className="shopTitle">
                <h1> Driloni</h1>
            </div>


            <div className="products">

                {PRODUCTS.map((product) => (<Product data={product} />
                ))}

            </div>

        </div>
    )
}
