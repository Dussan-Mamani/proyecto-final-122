import React from 'react'
import Cocacola from "./img/Cocacola.jpg"
import Fanta from "./img/Fanta.jpg"
import Pepsi from "./img/Pepsi.jpg"
import Sprite from "./img/Sprite.jpg"

export const SectorSodas = () => {
  return (
    <div>
        <h2>SECTOR SODAS</h2>
         <ul>
         <img src={Cocacola}/>
         <li>COCACOLA 13 Bs</li>
         <img src={Fanta}/>
        <li>FANTA 10 Bs</li>
        <img src={Pepsi}/>
        <li>PESPI 10 Bs</li>
        <img src={Sprite}/>
        <li>SPRITE 12 Bs</li>
      </ul>
    </div>
  )
}
