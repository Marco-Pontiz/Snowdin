import CartWidget from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={{marginLeft:10}}>

            <li>
                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
            </li>
            
                <CartWidget />
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;