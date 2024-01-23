import logo from './logo.svg';
import './App.css';
import { NavBar } from './Componentes/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Principal } from './Componentes/Principal';
import { SectorBebidas } from './Componentes/SectorBebidas';
import { PaginaNoEncontrada } from './Componentes/PaginaNoEncontrada';
import { SectorCarniceria } from './Componentes/SectorCarniceria';
import { SectorFrituritas } from './Componentes/SectorFrituritas';
import { SectorFrutas } from './Componentes/SectorFrutas';
import { SectorGeneral } from './Componentes/SectorGeneral';
import { SectorMasitas } from './Componentes/SectorMasitas';
import { SectorSodas } from './Componentes/SectorSodas';
import { SectorVegetales } from './Componentes/SectorVegetales';
import { PaginaDeCredito } from './Componentes/PaginaDeCredito';

function App() {
  return (
    <div className="App">
      <NavBar />
<Routes>
  <Route path='/' element={<Principal/>}/>
  <Route path='/sectorbebidas' element={<SectorBebidas/>}/>
  <Route path='/sectorcarniceria' element={<SectorCarniceria/>}/>
  <Route path='/sectorfrituritas' element={<SectorFrituritas/>}/>
  <Route path='/sectorfrutas' element={<SectorFrutas/>}/>
  <Route path='/sectorgeneral' element={<SectorGeneral/>}/>
  <Route path='/sectormasitas' element={<SectorMasitas/>}/>
  <Route path='/sectorsodas' element={<SectorSodas/>}/>
  <Route path='/sectorvegetales' element={<SectorVegetales/>}/>
  <Route path='/paginadecredito' element={<PaginaDeCredito/>}/>
  <Route path='/*' element={<PaginaNoEncontrada/>}/>
</Routes>
      
    </div>
  );
}

export default App;
