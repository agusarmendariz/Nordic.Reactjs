import CartWidget from "./CartWidget";
import search from "./images/search.png"
import { NavLink} from "react-router-dom";


const NavBar =()=>{
    return(
        <nav className="navbar navbar-expand-xl bg-dark"> 
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">NORDIC</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex justify-content-center" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit"><img src={search} alt="searching" width={24} /></button>
      </form>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"  to="{/categoria/sillas}">Sillas</NavLink>
        </li>
        <li className="nav-item">
          < NavLink className="nav-link" to="{/categoria/mesas}">Mesas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="{/categoria/lamparas}">Lámparas</NavLink>
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