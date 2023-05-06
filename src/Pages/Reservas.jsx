import {db} from "../credenciales";
import {React ,useState , useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import "../estilos/Reservas.css";

export default function Reservas() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fono, setFono] = useState('');
  const [fechahora, setFechaHora] = useState('');
  const refNombre = useRef(null);
  const refEmail = useRef(null);
  const refFono = useRef(null);
  const refFechahora = useRef(null);

  const agregarReserva = async () => {
    if (nombre != '' && email != '' && fono != '' && fechahora != '') {
      const { id } = await addDoc(collection(db, 'reservas'), {
        nombre: nombre,
        email: email,
        fono: fono,
        fechahora: fechahora
      });
      
      if (id != '') {
        alert('Reserva guardada con éxito!');
        setNombre('');
        setEmail('');
        setFono('');
        setFechaHora
      } else {
        alert('Error al guardar');
      }
    } else {
      alert('Debes llenar todos los campos');
    }
    refNombre.current.focus();
  }




  return (
    <div className="Reservas">
      <h1>Reservas</h1>
      <form  id="contact-form" method="POST">
          <label htmlFor="name">Nombre</label>
          <input name="nombre" type="text"  ref={refNombre} value={nombre} onChange={(event) => {setNombre(event.target.value)}}autoFocus/>
          <label htmlFor="email">Email</label>
          <input name="email"  type="email" ref={refEmail} value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          <label htmlFor="fono">Fono</label>
          <input name="fono"  type="number" ref={refFono}value={fono} onChange={(event) => {setFono(event.target.value)}} />
          <label htmlFor="fechaHora">Fecha y Hora</label>
          <input name="fechaHora"  type="datetime-local"  ref={refFechahora}value={fechahora} onChange={(event) => {setFechaHora(event.target.value)}}/>
          
          <div className="form-item">
            <input className="btn-enviar" type="button" value="Agregar" onClick={agregarReserva}/>
            </div>
          </form>
    </div>
  )
};


