import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}><h2>PRINCIPAL</h2></Link>
      <ul className='nav-list'>
        <Link to={"sectorbebidas"}><li>Sector Bebidas</li></Link>
        <Link to={"sectorcarniceria"}><li>Sector Carniceria</li></Link>
        <Link to={"sectorfrituritas"}><li>Sector Frituritas</li></Link>
        <Link to={"sectorfrutas"}><li>Sector Frutas</li></Link>
        <Link to={"sectorgeneral"}><li>Sector General</li></Link>
        <Link to={"sectormasitas"}><li>Sector Masitas</li></Link>
        <Link to={"sectorsodas"}><li>Sector Sodas</li></Link>
        <Link to={"sectorvegetales"}><li>Sector Vegetales</li></Link>
        <Link to={"paginadecredito"}><li>Pagina De Credito</li></Link>
        <Link to={"PaginaNoEncontrada"}><li>Pagina No Encontrada</li></Link>
      </ul>
    </nav>
  )
}
