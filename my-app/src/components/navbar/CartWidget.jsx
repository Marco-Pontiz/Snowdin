import { FiShoppingCart } from "../../../node_modules/react-icons/fi";
import '../../App.css'; 
import { NavLink } from "react-router-dom";
import React from 'react';
import Cart from '../../components/Cart/Cart'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
            <li>
            <NavLink className="nav-link" to='/Cart' element={<Cart />}><FiShoppingCart /></NavLink>
            </li>

            <i classname='bi bi-cart3'></i>
            <span>{totalProducts() || ''}</span>
        </>
    )
};
export default CartWidget;