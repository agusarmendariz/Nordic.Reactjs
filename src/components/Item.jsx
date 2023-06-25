import {Link} from 'react-router-dom'

const Item = ({product}) =>{
     return(
        <>
       <div className="col-md-4 my-2">
        <div className="card border border-0 " >
        <Link to={`/item/${product.id}`} className="text-dark text-decoration-none"> 
          <img src={product.imagen} className="card-img-top" alt="..."/>
           <div className="card-body text-center">
          <h5>{product.nombre}</h5>
            <p >Precio: ${product.precio}</p>
             <p >Cantidad disponible: {product.stock}</p>
          </div>
     </Link> 
      </div> 
    </div>
</>
     )

}
export default Item;