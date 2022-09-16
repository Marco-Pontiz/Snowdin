import CartWidget from "./CartWidget.jsx";
import imagenes from "../../img/imagenes.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <div className='img-l'>
            <img className='img-ll'src={imagenes.img1} alt='Snowdin-Logo'></img>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" style={{marginLeft:10}}>

            <li>
                <NavLink className="nav-link" aria-current="page" to='/product'>Shop</NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to='/detail'>Winter clothing</NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to=''>Sporting goods</NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to=''>Tools</NavLink>
            </li>

                <CartWidget />
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;