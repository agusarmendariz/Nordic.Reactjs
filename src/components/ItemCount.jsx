import { useEffect,useState } from "react";
import {Link} from "react-router-dom"

const ItemCount =({stock, onAdd})=>{
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    
    
    const increment =()=>{

        if (items < itemStock) {
            setItems(items + 1);
        }
     }
     const decrement = ()=>{
        if (items > 1) {
            setItems(items - 1);
        }
     }
    
     const addToCart= ()=>{
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
            console.log("Seleccionaste: " + items + " Productos al Carrito!\nTe quedan: " + itemStock + " Productos disponibles!");;
        }
     }
      useEffect(()=>{
        setItemStock(stock);
      },[stock]);
    

  return(
    <div className="container">
        <div className="row">
            <div className="col-sm-12 p-2">
               
                <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" class="btn btn-outline-primary" onClick={decrement}>-</button>
                <button type="button" class="btn btn-outline-primary">{items}</button>
                <button type="button" class="btn btn-outline-primary" onClick={increment}>+</button>
              </div>
            </div>
            </div>   
            <div className="row">
                <div className="col">
                {itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra</Link> : <button type="button" className="btn btn-outline-dark" onClick={addToCart}>Agregar al Carrito</button>}
                </div> 
</div>
</div>
    )
}
 export default ItemCount