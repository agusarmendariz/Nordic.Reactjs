import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productos from "./json/async-mock.json"


const ItemDetailContainer = () => {
    const [items,setItems]= useState ([]);
    const {id}= useParams()

    useEffect(()=>{
       const result = new Promise ((resolve) =>{
           setTimeout(() =>{
               resolve(productos.find(item => item.id === id))
           },1500);
           })
           result.then(data =>{
               setItems(data)
           })
       },[id]);

       return(

       )
}


export default ItemDetailContainer