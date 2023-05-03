import React from 'react'
import "../estilos/Contacto.css";

function Contacto() {
  return (
    <div className="Contacto">
      <h1> Contacta con Nosotros</h1>
      <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="name" placeholder="Ingrese su nombre" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Ingrese email..." type="email" />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Escribir mensaje..."
            name="mensaje"
            required
          ></textarea>
          <button type="submit"> Enviar mensaje</button>
        </form>
    </div>
  )
}

export default Contacto