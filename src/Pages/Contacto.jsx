
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
        <div>
          <h2>Direccion: Larapinta Oriente 777.Lampa</h2>
          <h2>Fono: 02 24413355</h2>
          <h2>ReyPabloPizzeria.cl</h2>
        </div>
    </div>
  );
}

export default Contacto