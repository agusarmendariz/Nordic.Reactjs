import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import bag from './images/shopbag.png'



const CartWidget = ()=>{

    const {sumItemsCart} = useContext(CartContext);
    return(
        (sumItemsCart() > 0) ? <Link className="btn btn-dark btn-sm position-relative" to={"/cart"}>
  
           <img src={bag} alt="shopping bag" width={24} />
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{sumItemsCart()}</span>
           </Link> : ""
    )
}
export default CartWidget