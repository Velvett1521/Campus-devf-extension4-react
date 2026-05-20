import React from 'react'
import { useCitas } from '../../hooks/useCitas'
import TarjetaDoctor from '../Common/TarjetaDoctor'
import Cargando from '../Common/Cargando'

function Doctores() {
  const { doctores, cargando } = useCitas()

  if (cargando) {
    return <Cargando />
  }

  return (
    <div className="page_doctores">
      <div className="page_header">
        <h1>Nuestros Doctores</h1>
        <p>Conoce a nuestro equipo medico</p>
      </div>

      <div className="doctores_grid">
        {doctores.map(doctor => (
          <TarjetaDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default Doctores