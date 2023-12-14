import React from 'react'
import Redlabel from "./img/Redlabel.jpg"
import Casareal from "./img/Casareal.jpg"
import Johnniewalker from "./img/Johnnieblack.jpg"
import Vino from "./img/Vino.jpg"
export const SectorBebidas = () => {
  return (
    <div>
       <h2>SECTOR BEBIDAS</h2>
       <ul>
         <img src={Redlabel}/>
         <li>RED LABEL 90 Bs</li>
         <img src={Casareal}/>
        <li>CASA REAL 70 Bs</li>
        <img src={Johnniewalker}/>
        <li>JOHNNIE WALKER 700 Bs</li>
        <img src={Vino}/>
        <li>VINO 60 Bs</li>
      </ul>
    
    </div>
  )
}

