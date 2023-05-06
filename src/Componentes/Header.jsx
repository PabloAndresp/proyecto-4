import React, {useState} from 'react';
import Logo from '../imagenes/logo.png';
import {Link,} from 'react-router-dom';
import "../estilos/Header.css";
import ReorderIcon from '@mui/icons-material/Reorder';





function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const moverHeaders = () => {
    setOpenLinks(!openLinks);
  
  };
  
  return (
    <div className="header">
      <div className='ladoIzquierdo' id={openLinks ? "open" : "close"} >
        <img src={Logo} />
        <div className='ocultarLinks'>
        <Link to="/">Inicio</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/reservas">Reservas</Link>
        </div>
      </div>
      <div className='ladoDerecho'>
      <Link to="/">Inicio</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/reservas">Reservas</Link>
      <button onClick= {moverHeaders}>
        <ReorderIcon/>
      </button>  
      </div>
    </div>
  );
}

export default Header
