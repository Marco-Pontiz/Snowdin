import ItemList from "../Item/ItemList";
import React, {useEffect,useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ControlledCarousel from "../components/navbar/Carousel";
import './ItemListContainer.css'

const ItemListContainer = (greeting) => {

    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (idCategory){
            const queryFilter = query(queryCollection, where('category', '==', idCategory))
            getDocs(queryFilter).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        } else {
            getDocs(queryCollection).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
    }, [idCategory]);
    console.log(greeting);

    return(
        <>
            <ControlledCarousel />
            <h2 className='h2c'>Select your category</h2>
        <section className="sectionCategoryStyle">
            <Link to="/category/clothes" className="linkCategoryStyle"><div className="divCategoryStyle">Clothes</div></Link>
            <Link to="/category/tool" className="linkCategoryStyle"><div className="divCategoryStyle">Tools</div></Link>
        </section>
            <ItemList data={data}/>
        </>
    )
}

    export default ItemListContainer;