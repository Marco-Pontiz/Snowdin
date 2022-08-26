import React from 'react';
import Item from './Item.jsx';

const ItemList = ({data = []}) => {
    return(
        data.map(Elements => <Item key={Elements.id} info={Elements}/>) 
    );
}

export default ItemList;