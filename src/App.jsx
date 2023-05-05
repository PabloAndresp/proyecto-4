import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Inicio from './Pages/Inicio';
import Header from './Componentes/Header';
import Menu from "./Pages/Menu";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Reservas from "./Pages/Reservas";
import Footer from './Componentes/footer';
import './App.css'

function App() {
  
return (
<div className="App">
  <Router>
  <Header/>
  <Routes>
  
    <Route path='/' element={<Inicio/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/Nosotros' element={<Nosotros/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/Reservas' element={<Reservas/>}/>
  </Routes>
  <Footer/>
  </Router>
  
  </div>
  );
 
}

export default App
