import ItemCount from './ItemCount'

const ItemDetail =({nombre,img,precio,descripcion,stock})=>{

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card d-flex' style={{width:"18rem"}}>
                        <img src={img} alt="" />
                    </div>
                    <h5 class="card-title">{nombre}</h5>
                   <p> Categoría: {descripcion}</p> 
                   <p>Precio:$ {precio}</p>
                  <p>Cantidad en stock: {stock}</p>
                  
                </div>
                <div>
              
                <ItemCount  initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
               
                </div>
            </div>

        </div>
    )
}

export default ItemDetail