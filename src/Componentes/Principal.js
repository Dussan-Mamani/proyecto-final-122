import React from 'react'
import Patito from "./img/Patito.jpg"

export const Principal = () => {
  return (
    <div>
        <h1>SUPERMERCADO PATITO</h1>
        <p>
          ESTE SUPERMERCADO PATITO OFRECE A LOS USUARIOS DIVERSOS PRODUCTOS
        </p>
       <p className='p2'> <img src={Patito}/></p>
         
    </div>
  )
}
