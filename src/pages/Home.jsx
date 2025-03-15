import React from "react";
import starwars1 from "../assets/images/star-wars1.jpg"
import starwars2 from "../assets/images/star-wars2.jpg"

const Home = () => {
  return (
    <main className="home-container">
      <h1>Bienvenido a la comunidad de fans de Star Wars</h1>
      <p>
        Aquí encontrarás información de personajes, naves y planetas del universo galáctico.
      </p>
      <div className="images-container">
        <img src={starwars1} alt="Imagen 1 de star wars" />
        <img src={starwars2} alt="Imagen 2 de star wars" />
      </div>
    </main>
  );
};

export default Home;
