import React from 'react'
import { Link } from 'react-router-dom'
import Navegacion from './Navegacion'

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <Link to="/" className="logo">
          <span className="logo_icono">🏥</span>
          <span className="logo_texto">Clinica Salud Total</span>
        </Link>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header