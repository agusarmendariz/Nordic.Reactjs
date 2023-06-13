import{useState, useEffect} from 'react';
import{useParams} from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import productos from "./json/async-mock.json"


const ItemListContainer =() =>{
     const [items,setItems]= useState ([]);
     const {id}= useParams()
 
     useEffect(()=>{
        const result = new Promise ((resolve) =>{
            setTimeout(() =>{
                resolve(id ?productos.filter(item => item.categoria === id):productos)
            },1500);
            })
            result.then(data =>{
                setItems(data)
            })
        },[id])
    

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