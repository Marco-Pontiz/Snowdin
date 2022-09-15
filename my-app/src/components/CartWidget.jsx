import { FiShoppingCart } from "../../node_modules/react-icons/fi";
import '../App.css'; 
import { NavLink } from "react-router-dom";
import React from 'react';

const CartWidget = () => {
    return (
        <li>
        <NavLink className="nav-link" to='cart'><FiShoppingCart /></NavLink>
        </li>
    )
}

export default CartWidget;