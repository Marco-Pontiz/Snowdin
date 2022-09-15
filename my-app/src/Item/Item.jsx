import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useContext} from 'react';

const Item = ({info}) => {
    return(
        <div className="etiquetDivStyle">
            <Card style={{width: '18rem', border: '1px solid black', margin:'3px'}}>
                <Card.Img variant='top' className= 'Imag' src={info.image} alt="" />
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>{info.subtitle}</Card.Text>
                <div className='boton'>
                    <Button className='buttonCard' variant='warning'>Add to cart</Button>
                </div>
            </Card>
        </div>
    );
}

export default Item;