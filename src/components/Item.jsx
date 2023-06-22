import {Link} from 'react-router-dom'

const Item = ({id,nombre,img,precio,stock}) =>{
     return(
        <>
       <div className="col-md-4 my-3">
        <div className="card" style={{width:"18rem"}}>
        <Link to={"/item/" + id}> 
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">Precio: ${precio}</p>
    <p className="stock">Cantidad{stock}</p>
  </div>
  </Link> 
 </div> 
</div>
</>
     )

}
export default Item;