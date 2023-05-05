import { Link } from 'react-router-dom';
import React from 'react'
import "../estilos/Inicio.css";
import PortadaImagen from"../assets/pizzaportada.webp";


function Inicio () {
  return (
    <div className= "inicio" style={{backgroundImage: `url(${PortadaImagen})`}}>
      <div className="headerContainer">
        <h1> Rey Pablo Pizzeria </h1>
        <p> Deliciosas Pizzas para Disfrutar</p>
        <Link to="/reservas">
          <button> Haz tu Reserva </button>
        </Link>
      </div>
      
    </div>
  )
}

export default Inicio
