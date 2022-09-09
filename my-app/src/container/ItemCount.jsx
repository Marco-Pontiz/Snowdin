import Button from 'react-bootstrap/Button';
import React,{ useState } from 'react';
import '../Item/Item.css';

const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial);
    const decrease = () => {
        setCount(count - 1);
    }
    const increment = () =>{
        setCount(count + 1);
    }
    return(
        <nav>
            <div>
                <Button variant="outline-warning" className='m-1' disabled={count <= 1} onClick={decrease}>-</Button>

                <span>{count}</span>

                <Button variant="outline-warning" className='m-1' disabled={count >= stock} onClick={increment}>+</Button>
            </div>
        <Button className= 'butt' variant="outline-warning" disabled={stock <= 0} onClick={() => onAdd(count)}>Add to cart</Button>
        </nav>
    )
}

export default ItemCount;