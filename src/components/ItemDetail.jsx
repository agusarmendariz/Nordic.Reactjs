import {useContext, useEffect,useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';


const ItemDetail =({product})=>{
    const {addItem} = useContext(CartContext);
    const [item,setItem]= useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(()=>{
        setItem(product);
    }, [product]);

    return(
        <div className="container my-5">
            <div className="d-flex justify-content-center">
            <div className="card"style={{ width: '24rem' }}>
            <img src={item.imagen} className="card-img-detail" alt="..."/>
            <div className="card-body text-center">
                <h2>{item.nombre}</h2>
                    <h5>{item.descripcion}</h5>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                     </div>
                </div>
            </div>
            
        
            </div>
      
        
    )
}

export default ItemDetail