import React from 'react'
import Manzana from "./img/Manzana.jpg"
import Durazno from "./img/Durazno.jpg"
import Sandia from "./img/Sandia.jpg"
import Platano from "./img/Platano.jpg"

export const SectorFrutas = () => {
  return (
    <div>
           <h2>SECTOR FRUTAS</h2>
       <ol>
         <img src={Manzana}/>
         <li>MANZANA 20 Bs</li>
         <img src={Durazno}/>
        <li>DURAZNO 30 Bs</li>
        <img src={Sandia}/>
        <li>SANDIA 40 Bs</li>
        <img src={Platano}/>
        <li>PLATANO 10 Bs</li>
      </ol>
    
    </div>
  )
}
