import { FiShoppingCart } from "../../../node_modules/react-icons/fi";
import '../../App.css'; 
import { NavLink } from "react-router-dom";
import React from 'react';
import Cart from '../../components/Cart/Cart'

const CartWidget = () => {
    return (
        <>
            <li>
            <NavLink className="nav-link" to='/Cart'><FiShoppingCart /></NavLink>
            </li>
            <Cart />
        </>
    )
};
export default CartWidget;