import {Link} from 'react-router-dom'

const Item = ({producto}) =>{
     return(
        <>
       <div className="col-md-4 my-3">
        <div className="card" style={{width:"18rem"}}>
        <Link to={"/item/" + producto.idArt}> 
          <img src={producto.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5>
    <p className="card-text">Precio: ${producto.precio}</p>
    <p className="stock">Cantidad{producto.stock}</p>
  </div>
  </Link> 
 </div> 
</div>
</>
     )

}
export default Item;