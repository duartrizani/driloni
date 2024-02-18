import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useState } from 'react'
import './table.css'
import { PRODUCTS , rreshtat } from '../../products';
import { Product } from '../shop/product';
import { CartItem } from '../cart/cart-item';
import DataTable from 'react-data-table-component';


export const Table = () => {
    const { cartItems, checkout } = useContext(ShopContext);


    const [inputarr, SetInputarr] = useState([])

    const [inputdata, SetInputdata] = useState({
        name: "",
        rollNo: ""
    })

    function changehandle(e) {

        SetInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }

    let { name, rollNo } = inputdata;
    function changhandle() {
        SetInputarr([...inputarr, { name, rollNo }])
        console.log(inputarr)
        console.log(inputdata)
    }
    return (
        <div className='table'>

            <div>

                <input type='text' name='name' value={inputdata.name} onChange={changehandle} placeholder='Name' /> <br /><br />
                <input type='text' name='rollNo' value={inputdata.rollNo} onChange={changehandle} placeholder='Number' /> <br /><br />
                <button onClick={changhandle}>CLick</button>
            </div>

            <div className='shop'>

            <div className="shopTitle">
                <h1> Driloni</h1>
            </div>

            <div className="products">
                <td>cartItems</td>

                     {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}


            </div>

        </div>


         </div>



    );
}
