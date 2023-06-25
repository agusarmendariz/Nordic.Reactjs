import bag from './images/shopbag.png'

const CartWidget = ()=>{
    return(
        <button type="button" className="btn btn-black btn-sm position-relative">
           <img src={bag} alt="shopping bag" width={32} />
           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}
export default CartWidget