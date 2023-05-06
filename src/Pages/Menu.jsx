
import {ListaMenu} from "../InfoMenu/ListaMenu";
import  MenuItem  from '../Componentes/MenuItem';
import "../estilos/Menu.css";



function Menu() {
  return (
    <div className='menu'>
      <h1 className='tituloMenu'> Nuestro Menu</h1>
      <div className='listaMenu'>{ListaMenu.map((menuItem, key) => {
        return (
          <MenuItem
          key={key}
          image={menuItem.image}
          nombre={menuItem.nombre}
          precio={menuItem.precio}
          />
        );
      })}
      </div>
      </div>
  );
}

export default Menu