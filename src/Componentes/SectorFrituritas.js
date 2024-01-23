import React from 'react'
import Lays from "./img/Lays.jpg"
import Elceibo from "./img/Elceibo.jpg"
import Doritos from "./img/Doritos.jpg"
import Chocolate from "./img/Chocolate.jpg"

export const SectorFrituritas = () => {
  return (
    <div>
           <h2>SECTOR FRITURITAS</h2>
       <ol>
         <img src={Lays}/>
         <li>PAPAS LAYS 20 Bs</li>
         <img src={Elceibo}/>
        <li>CHOCOLATE CEIBO 50 Bs</li>
        <img src={Doritos}/>
        <li>DORITOS 30 Bs</li>
        <img src={Chocolate}/>
        <li>CHOCOLATE 60 Bs</li>
      </ol>
    
    </div>
  )
}
