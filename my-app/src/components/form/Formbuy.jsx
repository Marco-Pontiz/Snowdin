import './Formbuy.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import swal from 'sweetalert';

const FormBuy = () =>{

    const mostrarAlerta=() =>{
        swal({
            icon:"success",
            title:'Purchase Success',
            text:'Enjoy your new purchase',
            button:"Accept",
            timer:"4000"
        })
    }

    return(
        <Form className='form'>
            <h3>Complete this form for the purchase to be completed</h3>
            <h4>Personal Data</h4>
            <div className="names">
                <Form.Group className="a mb-3">
                    <Form.Label className=''>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="b mb-3">
                    <Form.Label className=''>Last name</Form.Label>
                    <Form.Control type="lastname" placeholder="Enter your Lastname" />
                </Form.Group>
            </div>

                <Form.Group className="address mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address" placeholder="Example: Sydney Australia" />
                </Form.Group>

                <Form.Group className="address mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="address" placeholder="Example: 4437" />
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
                    <Form.Control type="CardNumber" placeholder="Card Number" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3">
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control type="password" placeholder="Security Code" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="CardNumber" placeholder="mouth/day/year" />
                </Form.Group>

        <Button variant="success" onClick={mostrarAlerta}>Buy Now</Button>
    </Form>
    )
}

export default FormBuy;