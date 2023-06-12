import{useState, useEffect} from 'react';
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import productos from "./json/async-mock.json"


const ItemListContainer =() =>{
     const [items,setItems]= useState ([])
 
     useEffect(()=>{
        const result = new Promise ((resolve) =>{
            setTimeout(() =>{
                resolve(productos)
            },1500);
            })
            result.then(data =>{
                setItems(data)
            })
        },[])
    

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