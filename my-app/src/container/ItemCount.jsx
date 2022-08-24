import Button from 'react-bootstrap/Button';
import React,{ useState } from 'react';

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
                <h3>Elementos</h3>
                <h4>Selecione la cantidad de elementos</h4>
                <Button variant="outline-danger" className='m-1' disabled={count <= 1} onClick={decrease}>-</Button>

                <span>{count}</span>

                <Button variant="outline-primary" className='m-1' disabled={count >= stock} onClick={increment}>+</Button>
            </div>
        <Button variant="outline-success" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </nav>
    )
}

export default ItemCount;