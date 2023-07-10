import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
      <header id="navBar">
        <h1>Cooper</h1>
        <nav>
          <a>Categorias</a>
          <a>Contacto</a>
          <a>Sobre Nosotros</a>
        </nav>
       <CartWidget/>
      </header>
    )
  }