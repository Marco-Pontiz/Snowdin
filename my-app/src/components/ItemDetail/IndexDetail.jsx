import React, {useState} from 'react';
import './ItemDetail.css';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ItemCount from '../../container/ItemCount';


const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return(
        <div className='container'>
            <div className='detail'>
                <img className='detail__image' src={data.image} alt="" />
                <div className='content-between'>
                    <h1>{data.title}</h1>
                    <h6>{data.subtitle}</h6>
                    {  
                        goToCart
                        ? <Link to='/cart'>Complete the purchase</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    }
                    <h2>{data.price}</h2>
                    <Button variant="success">Buy it</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;