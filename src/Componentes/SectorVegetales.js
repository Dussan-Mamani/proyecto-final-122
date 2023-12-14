import React from 'react'
import Zanahoria from "./img/Zanahoria.jpg"
import Tomate from "./img/Tomate.jpg"
import Lechuga from "./img/Lechuga.jpg"
import Arbeja from "./img/Arbeja.jpg"

export const SectorVegetales = () => {
  return (
    <div>
           <h2>SECTOR VEGETALES</h2>
       <ul>
         <img src={Zanahoria}/>
         <li>ZANAHORIA 90 Bs</li>
         <img src={Tomate}/>
        <li>TOMATE 70 Bs</li>
        <img src={Lechuga}/>
        <li>LECHUGA 80 Bs</li>
        <img src={Arbeja}/>
        <li>ARBEJA 60 Bs</li>
      </ul>
    
    </div>
  )
}
