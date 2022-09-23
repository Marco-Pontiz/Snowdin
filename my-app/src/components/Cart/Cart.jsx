import React from 'react'; 
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';

const Cart = () => {
const {cart, totalPrice} = useCartContext();

    if (cart.lenght === 0) {
        return(
            <>
                <p>There is nothing in your shopping cart</p>
                <Link to='/product'>See products for sale</Link>
            </>
            );
        }
}

export default Cart