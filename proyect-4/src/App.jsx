import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'; 
import Home from './Pages/Home';
import Header from './Componentes/Header';
import Menu from "./Pages/Menu";
import Nosotros from "./Pages/Nosotros";
import Contacto from "./Pages/Contacto";
import Footer from './Componentes/footer';
import './App.css'

function App() {
  
return (
<div className="App">
  <Router>
  <Header/>
  <Routes>
  
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/Nosotros' element={<Nosotros/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
  </Routes>
  <Footer/>
  </Router>
  
  </div>
  );
 
}

export default App
