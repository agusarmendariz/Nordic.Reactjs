import{useState, useEffect} from 'react';
import{useParams} from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import {doc, getDoc,getFirestore} from "firebase/firestone";


const ItemListContainer =() =>{
     const [items,setItems]= useState ([]);
     const {id}= useParams()
 
   
    useEffect(()=>{
        const db = getFirestore();
        
    })
    

    return (
        <div className= "container my-5">
            <div className='row'>
                <ItemList items={items}/>
                <ItemCount stock={1}/>
            </div>
        </div>

    )
}
 export default ItemListContainer