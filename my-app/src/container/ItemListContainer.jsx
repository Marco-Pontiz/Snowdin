import ItemList from "../Item/ItemList";
import React, {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ControlledCarousel from "../components/navbar/Carousel";

/*
const Elements = [
    { id:1, image:"https://m.media-amazon.com/images/I/41uN5FWDE6L.jpg", title:"Backpack snow Dakine", subtitle:"Waterproof snow backpack, able to carry heavy weights for tools. Ideal for mountain climbing or camping.", price:300},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_779962-MLA42372645958_062020-O.webp", title:"Snow goggles", subtitle:"Adidas brand. Made with quality material.", price:150},
    { id:3, image:"https://www.estiber.com/blog/wp-content/uploads/2019/10/baston-esqui.jpg", title:"Snow Sticks", subtitle:"Perfect ski poles", price:440}
]
*/
const ItemListContainer = (greeting) => {

    const [data, setData] = useState([]);
    const { idProducts } = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (idProducts){
            const queryFilter = query(queryCollection, where('category', '==', idProducts))
            getDocs(queryFilter).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [idProducts]);
    console.log(greeting);

    return(
        <>
            <ControlledCarousel />
            <ItemList data={data}/>
        </>
    )
}

    export default ItemListContainer;