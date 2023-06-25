import {useContext, useEffect,useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const ItemDetail =({product})=>{
    const {addItem} = useContext(CartContext);
    const [item,setItem]= useState({});

    const onAdd = (quantity) => {
        console.log("Cantidad: " + quantity);
        addItem(item, quantity);
    }

    useEffect(()=>{
        setItem(product);
    }, [product]);

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.nombre}</h1>
                    <h3>{item.descripcion}</h3>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail