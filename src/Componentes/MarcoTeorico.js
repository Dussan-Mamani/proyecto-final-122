import React from 'react'
import Chuleta from "./img/Chuleta.jpg"
import Chorizo from "./img/Chorizo.jpg"
import Pollo from "./img/Pollo.jpg"
import Salchicha from "./img/Salchicha.jpg"
export const MarcoTeorico = () => {
  return (
    <div>
           <h2>SECTOR CARNICERIA</h2>
           <ol>
        <img src={Chuleta}/>
         <li>CHULETA 50 Bs</li>
         <img src={Chorizo}/>
         <li>CHORIZO 30 Bs</li>
        <img src={Pollo}/>
        <li>POLLO 20 Bs</li>
        <img src={Salchicha}/>
        <li>SALCHICHA 10 Bs</li>
        </ol>
    </div>
  )
}
