import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'; 
import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemCart from '../ItemCart/itemcart';
import './Cart.css';
import { BsEmojiAngryFill } from 'react-icons/bs';

const Cart = () => {

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

    const mostrarAlerta=(e) =>{
        swal({
            icon:"success",
            title:'Purchase Success',
            text:'Enjoy your new purchase',
            button:"Accept",
            timer:"4000"
        })
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id))
    }

    const {cart, totalPrice} = useCartContext();

    const order ={
        buyer:{
            name: name,
            lastname: lastname,
            address: address,
            zipCode: zipCode,
            cardNumber: cardNumber,
            securityCode: securityCode,
            expiryDate: expiryDate
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
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

            <Form className='form'>
            <h3>Complete this form for the purchase to be completed</h3>
            <h4>Personal Data</h4>
            <div className="names">
                <Form.Group className="a mb-3">
                    <Form.Label className=''>Name</Form.Label>
                    <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="b mb-3">
                    <Form.Label className=''>Last name</Form.Label>
                    <Form.Control type="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}placeholder="Enter your Lastname" />
                </Form.Group>
            </div>

                <Form.Group className="address mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address" value={address} onChange={(e) => setAddress(e.target.value)}placeholder="Example: Sydney Australia" />
                </Form.Group>

                <Form.Group className="address mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="address" value={zipCode} onChange={(e) => setZipCode(e.target.value)} onchangeplaceholder="Example: 4437" />
                </Form.Group>

            <h4>Your Card</h4>
            <div className="checksboxx">
                <Form.Group className="mb-" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Visa" />
                </Form.Group>

                <Form.Group className="ch mb-" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="MasterCard" />
                </Form.Group>

                <Form.Group className="ch mb-" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Paypal" />
                </Form.Group>
            </div>

                <Form.Group className="cardnumber mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="CardNumber" value={cardNumber} onChange= {(e) => setCardNumber(e.target.value)}placeholder="Card Number" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3">
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control type="password"value={securityCode} onChange= {(e) => setSecurityCode(e.target.value)} placeholder="Security Code" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="CardNumber" value={expiryDate} onChange= {(e) => setExpiryDate(e.target.value)}placeholder="mouth/day/year" />
                </Form.Group>

        <Button variant="success" onClick={mostrarAlerta}>Buy Now</Button>
    </Form>
        </>
    )
}

export default Cart