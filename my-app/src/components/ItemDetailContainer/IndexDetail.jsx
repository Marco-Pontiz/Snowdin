import React,  {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/IndexDetail.jsx';

const Element = { id:1, image:"https://m.media-amazon.com/images/I/41uN5FWDE6L.jpg", title:"Backpack snow Dakine", subtitle:"Waterproof snow backpack, able to carry heavy weights for tools. Ideal for mountain climbing or camping." };

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Element);
            }, 3000);
        });
        getData.then(res => setData(res));
    },)

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;