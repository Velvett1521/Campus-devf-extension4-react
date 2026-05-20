import React from 'react'
import { Link } from 'react-router-dom'
import { useCitas } from '../../hooks/useCitas'

function TarjetaCita({ cita, on_eliminar }) {
  const { obtener_doctor_por_id } = useCitas()
  const doctor = obtener_doctor_por_id(cita.doctor_id)

  return (
    <div className="tarjeta_cita">
      <div className="tarjeta_header">
        <span className={`estado_${cita.estado}`}>{cita.estado}</span>
        <span className="cita_fecha">{cita.fecha}</span>
      </div>
      
      <div className="tarjeta_body">
        <h3>{cita.paciente_nombre}</h3>
        <p><strong>Doctor:</strong> {doctor?.nombre || 'No asignado'}</p>
        <p><strong>Hora:</strong> {cita.hora}</p>
        <p><strong>Motivo:</strong> {cita.motivo || 'No especificado'}</p>
      </div>
      
      <div className="tarjeta_footer">
        <Link to={`/citas/${cita.id}`} className="boton_ver">
          Ver Detalle
        </Link>
        <button 
          className="boton_eliminar_tarjeta"
          onClick={() => on_eliminar(cita.id)}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default TarjetaCita