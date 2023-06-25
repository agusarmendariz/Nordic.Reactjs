import CartWidget from "./CartWidget";
import { NavLink} from "react-router-dom";
// bg-black text-white

const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-xl bg-black"> 
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">NORDIC</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="{/categoriaId/sillas}">Sillas</NavLink>
        </li>
        <li className="nav-item">
          < NavLink className="nav-link" to="{/categoriaId/mesas}">Mesas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="{/categoriaId/lamparas}">Lámparas</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" to=""><CartWidget/> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;