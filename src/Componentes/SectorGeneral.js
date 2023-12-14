import React from 'react'
import Shampo from "./img/Shampo.jpg"
import Jabones from "./img/Jabones.jpg"
import Afeitadora from "./img/Afeitadora.jpg"
import Perfume from "./img/Perfume.jpg"

export const SectorGeneral = () => {
  return (
    <div>
           <h2>SECTOR GENERAL</h2>
       <ul>
         <img src={Shampo}/>
         <li>SHAMPO 80 Bs</li>
         <img src={Jabones}/>
        <li>JABONES 50 Bs</li>
        <img src={Afeitadora}/>
        <li>AFEITADORA 60 Bs</li>
        <img src={Perfume}/>
        <li>PERFUME 120 Bs</li>
      </ul>
    
    </div>
  )
}
