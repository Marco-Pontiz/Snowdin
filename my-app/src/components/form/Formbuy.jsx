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
            button:"Acept",
            timer:"4000"
        })
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(false)
    const [zip, setZip] = useState('')
    const [numberCard, setNumberCard] = useState('')
    const [securityCode, setSecurityCode] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName.length == 0 || lastName.length == 0 || address.length == 0 || zip.length == 0 || numberCard.length == 0 || securityCode.length == 0 || expiryDate.length == 0){
            setError(true)
        }
        console.log(firstName, lastName)
    }

    return(
        <Form className='form'>
            <h3>Complete this form for the purchase to be completed</h3>
            <h4>Personal Data</h4>
            <div className="names">
                <Form.Group className="a mb-3">
                    <Form.Label className='' onChange={e => setFirstName(e.target.value)}>Name</Form.Label>
                    {error&&firstName.length==0? <label>Name can´t be Empty</label>:""}
                    <Form.Control type="name" placeholder="Enter your Name" />
                </Form.Group>

                <Form.Group className="b mb-3">
                    <Form.Label className='' onChange={e => setLastName(e.target.value)}>Last name</Form.Label>
                    {error&&lastName.length==0? <label>Last name can´t be Empty</label>:""}
                    <Form.Control type="lastname" placeholder="Enter your Lastname" />
                </Form.Group>
            </div>

                <Form.Group className="address mb-3" onChange={e => setAddress(e.target.value)}>
                    <Form.Label>Address</Form.Label>
                    {error&&address.length==0? <label>Addres can´t be Empty</label>:""}
                    <Form.Control type="Address" placeholder="Example: Sydney Australia" />
                </Form.Group>

                <Form.Group className="address mb-3" onChange={e => setZip(e.target.value)}>
                    <Form.Label>Zip Code</Form.Label>
                    {error&&zip.length==0? <label>Zip Code can´t be Empty</label>:""}
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

                <Form.Group className="cardnumber mb-3" onChange={e => setNumberCard(e.target.value)}>
                    <Form.Label>Card Number</Form.Label>
                    {error&&numberCard.length==0? <label>This card number is not identified</label>:""}
                    <Form.Control type="CardNumber" placeholder="Card Number" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3" onChange={e => setSecurityCode(e.target.value)}>
                    <Form.Label>Security Code</Form.Label>
                    {error&&securityCode.length==0? <label>Security Code is not correct</label>:""}
                    <Form.Control type="password" placeholder="Security Code" />
                </Form.Group>

                <Form.Group className="cardnumber mb-3" onChange={e => setExpiryDate(e.target.value)}>
                    <Form.Label>Expiry Date</Form.Label>
                    {error&&expiryDate.length==0? <label>Expirity Date is not correct</label>:""}
                    <Form.Control type="CardNumber" placeholder="mouth/day/year" />
                </Form.Group>

        <Button variant="success" type="submit" onClick={mostrarAlerta()}>Buy Now</Button>
    </Form>
    )
}

export default FormBuy;