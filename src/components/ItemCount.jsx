import { useState } from "react";

const ItemCount =({stock,initial,onAdd})=>{
    const [quantity,setQuantity]=useState(initial)
     const increment =()=>{

        if(quantity < stock){
            setQuantity(quantity+1)
        }
     }
     const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity -1)
        }
     }
    


  return(
    <div className="container">
        <div className="row">
            <div className="col">
               
                <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" class="btn btn-outline-primary" onClick={decrement}>-</button>
                <button type="button" class="btn btn-outline-primary">{quantity}</button>
                <button type="button" class="btn btn-outline-primary" onClick={increment}>+</button>
              </div>
            </div>
            </div>   
            <div className="row">
                <div className="col">
                <button type="button" class="btn btn-outline-dark"onClick={()=> onAdd(quantity)} disabled ={!stock}>Agregar</button>
                </div>
                </div> 
</div>
    )
}
 export default ItemCount