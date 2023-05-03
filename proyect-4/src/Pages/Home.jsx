import { Link } from 'react-router-dom';
import React from 'react'
import "../estilos/Home.css";
import PortadaImagen from"../assets/pizza.webp";


function Home() {
  return (
    <div className= "home" style={{backgroundImage: `url(${PortadaImagen})`}}>
      <div className="headerContainer">
        <h1> Rey Pablo Pizzeria </h1>
        <p> Deliciosas Pizzas para Disfrutar</p>
        <Link to="/menu">
          <button> Haz tu Pedido </button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
