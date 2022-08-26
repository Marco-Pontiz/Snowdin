import ItemCount from "./ItemCount";
import ItemList from "../Item/ItemList";
import React, {useEffect,useState} from 'react'

const ItemListContainer = (greeting) => {
const Elements = [
    { id:1, image:"https://m.media-amazon.com/images/I/41uN5FWDE6L.jpg", title:"Backpack snow Dakine"},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_779962-MLA42372645958_062020-O.webp", title:"Snow goggles",},
    { id:3, image:"https://www.estiber.com/blog/wp-content/uploads/2019/10/baston-esqui.jpg", title:"Snow Sticks"}
]
const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Elements)
            }, 3000);
        }); 
        getData.then(res => setData(res));
    }, [])
    console.log(greeting);
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    return(
        <>
        <ItemList data={data}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer;