import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({info}) => {
    return(
        <div className="etiquetDivStyle" style={{}}>
            <Card className='Cards' style={{width: '18rem', height: '25rem', border: '1px solid black', margin:'1em'}}>
                <Card.Img variant='top' className= 'Imag' style={{height:'10rem'}} src={info.image} alt="" />
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>{info.subtitle}</Card.Text>
                <div className='boton'>
                    <Button variant='dark'>
                        <Link className='buttonCard' variant='warning' to={`/product/${info.id}`}>Add to cart</Link>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Item;