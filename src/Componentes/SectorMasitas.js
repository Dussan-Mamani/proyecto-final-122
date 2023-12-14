import React from 'react'
import Pastel from "./img/Pastel.jpg"
import Tresleches from "./img/Tresleches.jpg"
import Croissant from "./img/Croissant.jpg"
import Paneton from "./img/Paneton.jpg"

export const SectorMasitas = () => {
  return (
    <div>
           <h2>SECTOR MASITAS</h2>
       <ul>
         <img src={Pastel}/>
         <li>PASTEL 90 Bs</li>
         <img src={Tresleches}/>
        <li>TRES LECHES 70 Bs</li>
        <img src={Croissant}/>
        <li>CROISSANT 50 Bs</li>
        <img src={Paneton}/>
        <li>PANETON 60 Bs</li>
      </ul>
    
    </div>
  )
}
