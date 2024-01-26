import React from 'react'
import { Link } from 'react-router-dom'
export const PaginaDeCredito = () => {
  return (
    <div>
        <h2>PAGINA DE CREDITO "USUARIO"</h2>
            <ol>
            <li><p>NOMBRE</p>
            <input type='text' name='valor1' id='valor1' />
            </li>
            <li><p>APELLIDO</p>
            <input type='text' name='valor2' id='valor2' />
            </li>
            <li><p>PRODUCTO QUE VA PEDIR</p>
            <input type='text' name='valor2' id='valor2' />
            </li>
            <li><p>DESTINO ENVIO</p>
            <input type='text' name='valor2' id='valor2' />
            </li>
            <li><p>EMAIL</p>
            <input type='email' name='valor3' id='valor3' />
            </li>
            <li><p>CELULAR</p>
            <input type='tel' name='valor4' id='valor4' />
            <li></li>
            <li>
                <button>ENVIAR</button>
           </li>
           </li>
        </ol>
    </div>
  )
}
