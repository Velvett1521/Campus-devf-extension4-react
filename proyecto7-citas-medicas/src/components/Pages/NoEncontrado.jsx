import React from 'react'
import { Link } from 'react-router-dom'

function NoEncontrado() {
  return (
    <div className="page_no_encontrado">
      <div className="error_404">
        <h1>404</h1>
        <h2>Pagina no encontrada</h2>
        <p>Lo sentimos, la pagina que buscas no existe</p>
        <Link to="/" className="boton_principal">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

export default NoEncontrado