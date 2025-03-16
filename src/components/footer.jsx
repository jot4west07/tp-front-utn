import "../styles/styles.css"; // Importamos los estilos
import starwars3 from "../assets/images/star-wars3.jpg"
import starwars4 from "../assets/images/star-wars4.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={starwars3} alt="Imagen star wars footer" />
      </div>
      <p>Todos los derechos reservados ®</p>
      <div>
        <img src={starwars4} alt="Imagen star wars footer" />
      </div>
    </footer>
  );
};

export default Footer;
