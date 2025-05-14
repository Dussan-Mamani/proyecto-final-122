import React from 'react'
import { Link } from 'react-router-dom'
export const PaginaDeCredito = () => {
  return (
    <div>
        <h2>PAGINA DE CREDITO "USUARIO"</h2>
            <ol>
            <p>NOMBRE</p>
            <input type='text' name='valor1' id='valor1' />
            
            <p>APELLIDO</p>
            <input type='text' name='valor2' id='valor2' />
            
            <p>PRODUCTO QUE VA PEDIR</p>
            <input type='text' name='valor2' id='valor2' />
            
            <p>DESTINO ENVIO</p>
            <input type='text' name='valor2' id='valor2' />
            
            <p>EMAIL</p>
            <input type='email' name='valor3' id='valor3' />
            
            <p>CELULAR</p>
            <input type='tel' name='valor4' id='valor4' />
            
            <li>
                <button>ENVIAR</button>
           
           </li>
        </ol>
    </div>
  )
}
