import React from 'react'
import Logo from "./img/Logo.jpg"
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}><h2>Shadow Games</h2></Link>
      <ul className='nav-list'>
        <Link to={"inicio"}><li>Inicio</li></Link>
        <Link to={"marcoteorico"}><li>Marco Teorico</li></Link>
        <Link to={"analisisestructural"}><li>Analisis Estructural</li></Link>
        <Link to={"orientadoaobjetos"}><li>Orientado a Objetos</li></Link>
        <Link to={"videos"}><li>Videos</li></Link>
        <Link to={"contacto"}><li>Contacto</li></Link>
        <Link to={"compra"}><li>Compra</li></Link>
        <Link to={"reserva"}><li>Reserva</li></Link>
        <Link to={"paginadecredito"}><li>Pagina De Credito</li></Link>
      </ul>
    </nav>
  )
}
