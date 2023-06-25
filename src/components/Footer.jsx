import facebook from './images/instagram.png'
import whatsapp from './images/wapp.png'
import instagram from './images/facebook.png'

const Footer =() =>{

    return (
      
           
           
           <ul class="nav justify-content-center bg-dark ">
  <li class="nav-item">
    <a class="nav-link" href="#">Nordic</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contacto</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Preguntas</a>
  </li>

  < div className ="d-flex align-items-end">
        
           <div className="p-2"> <img src={facebook} alt="" width={24} />  </div>
            <div className="p-2"> <img src={whatsapp} alt=""  /></div>
            <div className="p-2"> <img src={instagram} alt=""width={24} /> </div>

            </div>


   </ul>


      
    )
}

export default Footer