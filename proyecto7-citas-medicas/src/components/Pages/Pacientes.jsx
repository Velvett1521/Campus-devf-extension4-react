import React, { useMemo } from 'react'
import { useCitas } from '../../hooks/useCitas'

function Pacientes() {
  const { citas } = useCitas()

  const pacientes_unicos = useMemo(() => {
    const mapa_pacientes = new Map()
    
    citas.forEach(cita => {
      if (!mapa_pacientes.has(cita.paciente_nombre)) {
        mapa_pacientes.set(cita.paciente_nombre, {
          nombre: cita.paciente_nombre,
          telefono: cita.paciente_telefono,
          email: cita.paciente_email,
          total_citas: 1
        })
      } else {
        const paciente = mapa_pacientes.get(cita.paciente_nombre)
        paciente.total_citas += 1
      }
    })
    
    return Array.from(mapa_pacientes.values())
  }, [citas])

  return (
    <div className="page_pacientes">
      <div className="page_header">
        <h1>Pacientes</h1>
        <p>Lista de pacientes registrados</p>
      </div>

      {pacientes_unicos.length === 0 ? (
        <div className="sin_pacientes">
          <p>No hay pacientes registrados</p>
        </div>
      ) : (
        <div className="pacientes_lista">
          {pacientes_unicos.map((paciente, index) => (
            <div key={index} className="paciente_card">
              <div className="paciente_info">
                <h3>{paciente.nombre}</h3>
                <p>Telefono: {paciente.telefono || 'No registrado'}</p>
                <p>Email: {paciente.email || 'No registrado'}</p>
              </div>
              <div className="paciente_stats">
                <span className="citas_count">{paciente.total_citas}</span>
                <span>citas agendadas</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pacientes