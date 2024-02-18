import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    let x = price;
    let y = cartItems[id];

    let z = x * y


  return (
    <div className='cartItem'>

        <img src={productImage} />
        <div className='description'>
            <p><b> {productName} </b></p>
            <p>Price: ${price} <span className='span1'>Total: ${z}</span> </p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)} className='btn btn-outline-info'> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)} className='btn btn-outline-info'> + </button>
            </div>
        </div>

    </div>
  )
}
