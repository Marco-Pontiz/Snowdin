import React from 'react';
import './itemcart.css';
import {useCartContext} from '../../context/CartContext'

const Itemcart = ({product}) => {
const {removeProduct} = useCartContext();
    return(
        <div className='itemcart'>
            <img src={product.img} alt={product.title}/>
        <div>
        <p>Title: {product.title}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price: {product.price}</p>
        <p>subtotal: £{product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Delete</button>
        </div>
        </div>
    )
}