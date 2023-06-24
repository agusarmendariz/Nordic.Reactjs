import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from "./Loading";
import {doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [items, setItems]= useState ([]);
    const [loading, setLoading]= useState(true)
    const {id}= useParams()


    useEffect (()=>{
        const db = getFirestore();
        const product = doc (db, "items", id);
        getDoc(product).then(result=>{
            setItems({id:result.id, ...result.data()});
            setLoading(false);
        });
    }, [id])

       return(
        <>
        
        {loading ? <Loading /> :< ItemDetail product ={items}/>}
        
        </>
       
       )
}


export default ItemDetailContainer