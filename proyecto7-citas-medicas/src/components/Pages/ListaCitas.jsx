import React from 'react'
import { Link } from 'react-router-dom'
import { useCitas } from '../../hooks/useCitas'
import TarjetaCita from '../Common/TarjetaCita'
import Cargando from '../Common/Cargando'

function ListaCitas() {
  const { citas, eliminar_cita, cargando } = useCitas()

  if (cargando) {
    return <Cargando />
  }

  const citas_ordenadas = [...citas].reverse()

  return (
    <div className="page_lista_citas">
      <div className="page_header">
        <h1>Mis Citas</h1>
        <Link to="/citas/nueva" className="boton_secundario">
          + Nueva Cita
        </Link>
      </div>

      {citas_ordenadas.length === 0 ? (
        <div className="sin_citas">
          <p>No tienes citas agendadas</p>
          <Link to="/citas/nueva" className="boton_principal">
            Agendar mi primera cita
          </Link>
        </div>
      ) : (
        <div className="citas_grid">
          {citas_ordenadas.map(cita => (
            <TarjetaCita 
              key={cita.id}
              cita={cita}
              on_eliminar={eliminar_cita}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListaCitas