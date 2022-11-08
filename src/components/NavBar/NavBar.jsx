import Logo from "../../assets/imagen/logo.svg"

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <img src={Logo} width="80em"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Peliculas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Novedades Populares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mi lista</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Explora por idiomas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar