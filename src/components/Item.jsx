import {Link} from 'react-router-dom'

const Item = ({product}) =>{
     return(
        <>
       <div className="col-md-4 my-3">
        <div className="card" style={{width:"18rem"}}>
        <Link to={"/item/" + product.idArt} className="text-decoration-none"> 
          <img src={product.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="text-decoration-none">{product.nombre}</h5>
    <p className="text-decoration-none">Precio: ${product.precio}</p>
    <p className="text-decoration-none">Cantidad: {product.stock}</p>
  </div>
  </Link> 
 </div> 
</div>
</>
     )

}
export default Item;