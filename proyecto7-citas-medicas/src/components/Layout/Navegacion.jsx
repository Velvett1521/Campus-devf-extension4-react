import React from 'react'
import { NavLink } from 'react-router-dom'

function Navegacion() {
  const enlaces = [
    { path: '/', nombre: 'Inicio' },
    { path: '/citas', nombre: 'Mis Citas' },
    { path: '/citas/nueva', nombre: 'Agendar Cita' },
    { path: '/doctores', nombre: 'Doctores' },
    { path: '/pacientes', nombre: 'Pacientes' },
    { path: '/contacto', nombre: 'Contacto' }
  ]

  return (
    <nav className="navegacion">
      {enlaces.map((enlace) => (
        <NavLink
          key={enlace.path}
          to={enlace.path}
          className={({ isActive }) => 
            isActive ? 'nav_link activo' : 'nav_link'
          }
        >
          {enlace.nombre}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navegacion