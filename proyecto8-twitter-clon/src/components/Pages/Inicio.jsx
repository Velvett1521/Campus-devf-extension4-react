import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Inicio() {
  const { is_authenticated } = useAuth()

  if (is_authenticated) {
    return (
      <div className="page_inicio">
        <div className="hero_small">
          <h1>Bienvenido de vuelta</h1>
          <p>Revisa tu timeline para ver los ultimos tweets</p>
          <Link to="/timeline" className="boton_principal">Ir al Timeline</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page_inicio">
      <div className="hero_landing">
        <h1>Twitter Clon</h1>
        <p>Conecta con el mundo, comparte tus ideas</p>
        <div className="hero_botones">
          <Link to="/login" className="boton_secundario">Iniciar Sesion</Link>
          <Link to="/registro" className="boton_principal">Registrarse</Link>
        </div>
      </div>
    </div>
  )
}

export default Inicio