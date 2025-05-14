import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componentes/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Componentes/Principal';
import { Inicio } from './Componentes/Inicio';
import { MarcoTeorico } from './Componentes/MarcoTeorico';
import { AnalisisEstructural } from './Componentes/AnalisisEstructural';
import { OrientadoAObjetos } from './Componentes/OrientadoAObjetos';
import { Videos } from './Componentes/Videos';
import { Contacto } from './Componentes/Contacto';
import { Compra } from './Componentes/Compra';
import { Reserva } from './Componentes/Reserva';
import { PaginaDeCredito } from './Componentes/PaginaDeCredito';

function App() {
  return (
    <div className="App">
      <NavBar />
<Routes>
  <Route path='/' element={<Principal/>}/>
  <Route path='/inicio' element={<Inicio/>}/>
  <Route path='/marcoteorico' element={<MarcoTeorico/>}/>
  <Route path='/analisisestructural' element={<AnalisisEstructural/>}/>
  <Route path='/orientadoaobjetos' element={<OrientadoAObjetos/>}/>
  <Route path='/videos' element={<Videos/>}/>
  <Route path='/contacto' element={<Contacto/>}/>
  <Route path='/compra' element={<Compra/>}/>
  <Route path='/reserva' element={<Reserva/>}/>
  <Route path='/paginadecredito' element={<PaginaDeCredito/>}/>
</Routes>
      
    </div>
  );
}

export default App;
