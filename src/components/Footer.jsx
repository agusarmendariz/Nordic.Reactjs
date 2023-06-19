import facebook from '../images/facebook.png'
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'

const Footer =() =>{

    return (
        <div className='container-fluid py-5'>
           < div className ="d-flex align-items-end">

           <div class="p-2"> <img src={facebook} alt="" />  </div>
            <div class="p-2"> <img src={whatsapp} alt="" /></div>
            <div class="p-2"> <img src={instagram} alt="" /> </div>

            </div>


            </div>


        
      
    )
}

export default Footer