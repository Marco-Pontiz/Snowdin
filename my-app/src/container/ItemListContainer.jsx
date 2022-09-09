import ItemList from "../Item/ItemList";
import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

const ItemListContainer = (greeting) => {
const Elements = [
    { id:1, image:"https://m.media-amazon.com/images/I/41uN5FWDE6L.jpg", title:"Backpack snow Dakine", subtitle:"Waterproof snow backpack, able to carry heavy weights for tools. Ideal for mountain climbing or camping."},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_779962-MLA42372645958_062020-O.webp", title:"Snow goggles", subtitle:"Adidas brand. Made with quality material."},
    { id:3, image:"https://www.estiber.com/blog/wp-content/uploads/2019/10/baston-esqui.jpg", title:"Snow Sticks", subtitle:"Perfect ski poles"}
]
const [data, setData] = useState([]);
const { idProducts } = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Elements)
            }, 3000);
        }); 
        getData.then(res => setData(res));
    }, [])
    console.log(greeting);

    return(
        <>
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;