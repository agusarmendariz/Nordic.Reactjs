import ItemCount from './ItemCount'

const ItemDetail =({nombre,img,precio,descripcion,stock})=>{

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card d-flex' style={{width:"18rem"}}>
                        <img src={img} alt="" />
                    </div>
                  
                </div>
            </div>

        </div>
    )
}