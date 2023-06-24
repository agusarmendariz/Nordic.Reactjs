import facebook from './images/instagram.png'
import whatsapp from './images/whatsapp.png'
import instagram from './images/facebook.png'

const Footer =() =>{

    return (
        <div className='container-fluid py-5'>
           < div className ="d-flex align-items-end">
           <p>Nordic</p> 
           <div className="p-2"> <img src={facebook} alt="" />  </div>
            <div className="p-2"> <img src={whatsapp} alt="" /></div>
            <div className="p-2"> <img src={instagram} alt="" /> </div>

            </div>


            </div>


        
      
    )
}

export default Footer