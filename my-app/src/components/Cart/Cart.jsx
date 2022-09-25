import React from 'react'; 
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart/itemcart'

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return(
            <>
                <p>There is nothing in your shopping cart</p>
                <Link to='/product'>See products for sale</Link>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart