import CartWidget from "./CartWidget.jsx";
import imagenes from "../img/imagenes.jsx";
import { Snowdin } from "../img/Snowdin.JPG";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <div className='img-l'>
            <img className='img-ll'src={imagenes.img1} alt='Company logo'></img>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Shop</a>
                <a class="nav-link" href="#">Winter clothing</a>
                <a class="nav-link" href="#">Sporting goods</a>
                <a class="nav-link" href="#">Tools</a>
                <CartWidget />
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;