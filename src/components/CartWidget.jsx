import bag from './images/shopbag.png'

const CartWidget = ()=>{
    return(
        <button type="button" class="btn btn-light position-relative">
           <img src={bag} alt="shopping bag" width={24}/>
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
        </button>
    )
}
export default CartWidget