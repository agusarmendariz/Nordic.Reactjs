import facebook from './images/instagram.png'
import whatsapp from './images/whatsapp.png'
import instagram from './images/facebook.png'

const Footer =() =>{

    return (
 <div className="fixed-bottom">
           <ul className="nav justify-content-center bg-dark pt-3">
  <li className="nav-item">
    <a className="nav-link" href="#">Nordic</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contacto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Preguntas</a>
  </li>

  < div className ="d-flex align-items-end">
        
           <div className="p-2"> <img src={facebook} alt="" width={24} />  </div>
            <div className="p-2"> <img src={whatsapp} alt="" width={24}/></div>
            <div className="p-2"> <img src={instagram} alt=""width={24} /> </div>

            </div>


   </ul>

</div>
      
    )
}

export default Footer