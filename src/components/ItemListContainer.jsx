import{useState, useEffect} from 'react';
import{useParams} from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import {getDocs,collection, getFirestore, limit, query, where, } from "firebase/firestore";


const ItemListContainer =() =>{
     const [items,setItems]= useState ([]);
     const {id}= useParams()

    
     useEffect(()=>{
        const db = getFirestore();
        const q =query (
            collection (db, "items"),
            where("categoria", "==", "sillas"),
            limit(1)
        );
        getDocs(q).then(snapshot=>{
            if(snapshot.size === 0){
                setItems(snapshot.docs.map(doc=>({id: doc.id,  ...doc.data()})))
            }else{

            }
        });

        },[id]);
        

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