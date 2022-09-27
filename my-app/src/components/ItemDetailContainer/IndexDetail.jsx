import React,  {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/IndexDetail.jsx';

const Products = [
    { id:1, image:"https://m.media-amazon.com/images/I/41uN5FWDE6L.jpg", title:"Backpack snow Dakine", subtitle:"Waterproof snow backpack.", price:300},
    {id:2, image:"https://http2.mlstatic.com/D_NQ_NP_779962-MLA42372645958_062020-O.webp", title:"Snow goggles", subtitle:"Adidas brand. Made with quality material.", price:150},
    {id:3, image:"https://www.estiber.com/blog/wp-content/uploads/2019/10/baston-esqui.jpg", title:"Snow Sticks", subtitle:"Perfect ski poles", price:440}
];

const ItemDetailContainer = () => {
    const {idProduct} = useParams()
    const [data, setData] = useState ({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Products.find(e => e.id == idProduct));
            }, 3000);
        });
        getData.then(res => setData(res));

        if(idProduct){
            getData.then(res => setData(res.find(Prod => Prod.id === idProduct)));
    } else {
        getData.then(res => setData(res));
    }
    }, []
    )

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;