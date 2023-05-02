
import Logo from '../assets/logo.png';
import {Link, Outlet} from 'react-router-dom';
import "../estilos/Header.css";
import ReorderIcon from '@mui/icons-material/Reorder';





function Header() {

  
  
  
  return (
    <div className="header">
      <div className='ladoIzquierdo' >
        <img src={Logo} />
        
      </div>
      <div className='ladoDerecho'>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/nosotros">Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <button >
        <ReorderIcon/>
      </button>
        
      </div>
      <Outlet/>
    </div>
  );
}

export default Header
