import { addDoc, collection,getFirestore } from 'firebase/firestore';
import React from 'react'; 
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart/itemcart';
import './Cart.css';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order ={
        buyer:{
            name:'Simón',
            email: 'simon@gmail.com',
            phone: '123-456',
            address: 'Ghana',
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))
    }
    
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
            <p className='c-p'>
                total: {totalPrice()}
            </p>
            <button className='btns' onClick={handleClick}>Issue purchase</button>
        </>
    )
}

export default Cart