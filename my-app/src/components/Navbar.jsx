const Navbar = () => {
    return(
<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">Snowdin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Shop</a>
        <a class="nav-link" href="#">Winter clothing</a>
        <a class="nav-link" href="#">Sporting goods</a>
        <a class="nav-link" href="#">Tools</a>
    </div>
    </div>
</div>
</nav>
    )
}

export default Navbar;