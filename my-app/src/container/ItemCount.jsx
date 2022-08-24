import Button from 'react-bootstrap/Button';
import React,{useState} from 'react';

const ItemCount = () =>{
    const carrito = []
    return(
    <nav>
        <div>
            Cantidad de elementos en el carrito <span>{carrito.length}</span>
        </div>
        <div>
            <h3>Elementos</h3>
            <Button variant="outline-danger" className='m-1'>-</Button><input className='inp'></input><Button variant="outline-primary" className='m-1'>+</Button>
        <div className='mt-3'>
            <Button variant="outline-success" onClick = {() => {
                carrito.push('Elemento')
                console.log(carrito);
            }}>Agregar elemento</Button>
            <Button variant="outline-danger" onClick = {() => {
                carrito.pop('Elemento')
                console.log(carrito);
            }}>Quitar elemento</Button>
        </div>
    </div>
    </nav>
    )
}

export default ItemCount;