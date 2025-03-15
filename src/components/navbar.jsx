import { Link } from "react-router-dom";
import "../styles/styles.css"; // Importamos los estilos
import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-navbar">
            <img src={logo} alt="Logo de pagina" />
        </div>
        <h1>Star Wars fan page</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api-data">Personajes</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
