import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <header>
        <h1>Tienda Productos de Calidad</h1>

        <nav>
            <ul>
                <li>Bebidas</li>
                <li>Sin Tacc</li>
                <li>Frutos Secos</li>
                <li>Saludables</li>
                <li>Integrales</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar