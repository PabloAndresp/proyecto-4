import React from 'react'
import "../estilos/Reservas.css";

function Reservas() {
  return (
    <div className="Reservas">
      <h1>Reservas</h1>
      <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="Nombre y Apellido" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Ingrese email..." type="email" />
          <label htmlFor="fono">Fono</label>
          <input name="fono" placeholder="Ingresar N° de Telefono" type="number"/>
          <label htmlFor="fechaHora">Fecha y Hora</label>
          <input name="fechaHora" placeholder="FechaHora" type="datetime-local"/>
          
          <button type="submit"> Enviar Reservacion</button>
        </form>
    </div>
  )
}

export default Reservas
